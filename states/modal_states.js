/**
 * Brochurno main statechart
 *
 * @author Jason Dooley
 * License: Licened under MIT license (see license.js)
 */
/*globals Brochurno CoreBrochurno  */

Brochurno.mixin({
  modalStates: SC.State.design({
    initialSubstate: 'noModal',

    noModal: SC.State.design({
      enterState: function () { },

      openArticle: function (view,article) {
        if (article.length) {
          Brochurno.applicationViewController.set('articlesView',view);
          this.gotoState('loadingArticle');
        }
      },

      viewAttachment: function (guid,type) {
        var attachment = Brochurno.store.find(Brochurno[type.camelize().capitalize()],guid);
        if (attachment) {
          Brochurno.attachmentController.set('content',attachment);
          this.gotoState('openAttachment');
        }
      }
    }),

    openTwitter: function () {
      window.location = 'http://twitter.com/#!/sevifives';
    },

    openGithub: function () {
      window.location = 'https://github.com/sevifives/Brochurno';
    },

    // I'm not using this right now. I will in the future, possibly. Leaving it
    // because it may give you some ideas.
    loadingArticle: SC.State.design({
      enterState: function () {
        var articlePane = SC.PickerPane.create({
          layout: {right: 50,left: 50,top: 50,bottom: 50},

          keyUp: function (evt) {
            // oddly, keyEquivalent is not working for 'left' and 'right'
            if (evt.keyCode === 37) { Brochurno.statechart.sendAction('previousArticle'); }
            if (evt.keyCode === 39) { Brochurno.statechart.sendAction('nextArticle'); }
          },

          contentView: SC.View.design({
            childViews: ['title','description','body','close','next','previous'],

            title: SC.LabelView.design({
              layout: {left: 10, right: 10,top: 50,height: 40},
              valueBinding: SC.Binding.oneWay('Brochurno.articleController.title') 
            }),

            description: SC.LabelView.design({
              layout: {left: 10, right: 10,top: 95,height: 20},
              valueBinding: SC.Binding.oneWay('Brochurno.articleController.description')
            }),

            body: SC.ScrollView.design({
              layout: {left: 10,top: 115,right: 10,bottom: 100},
              contentView: SC.StaticContentView.design({
                contentBinding: SC.Binding.oneWay('Brochurno.articleController.body')
              })
            }),

            next: SC.ButtonView.design({
              layout: {right: 10,top: 10,width: 100,height: 30},
              title: "_Next".loc(),
              action: 'nextArticle',
              isEnabledBinding: SC.Binding.oneWay('Brochurno.applicationViewController.isNextEnabled')
            }),

            previous: SC.ButtonView.design({
              layout: {left: 10,top: 10,width: 100,height: 30},
              title: "_Previous".loc(),
              action: 'previousArticle',
              isEnabledBinding: SC.Binding.oneWay('Brochurno.applicationViewController.isPreviousEnabled')
            }),

            close: SC.ButtonView.design({
              layout: {right: 10,width: 100,height: 30, bottom: 10},
              action: 'closeArticle',
              title: "_Close".loc(),
              keyEquivalent: 'escape'
            })
          })
        });

        Brochurno.applicationViewController.set('articlePane',articlePane);
        this.gotoState('articleReady');
      }
    }),

    // Same as above. These are things that were working, but I removed them
    // because they seemed frivolous
    articleReady: SC.State.design({
      enterState: function () {
        var articlePane = Brochurno.applicationViewController.get('articlePane');
        if (articlePane && !articlePane.get('isPaneAttached')) {articlePane.popup();}
        else { this.gotoState('noModal'); }
      },

      previousArticle: function () {
        Brochurno.applicationViewController.get('articlesView').selectPreviousItem();
      },

      nextArticle: function () {
        Brochurno.applicationViewController.get('articlesView').selectNextItem();
      },

      closeArticle: function () {
        this.gotoState('noModal');
      },

      exitState: function () {
        var articlePane = Brochurno.applicationViewController.get('articlePane');
        if (articlePane) {articlePane.destroy();}
        Brochurno.applicationViewController.set('articlesView',null);
      }
    }),

    openAttachment: SC.State.design({
      enterState: function () {
        var viewer = Brochurno.modalsPage.get('attachmentViewer');
        this._viewer = viewer;
        var att = Brochurno.attachmentController.get('content'),type = att.get('attachmentType');
        
        var attViewer = Brochurno.modalsPage.get('%@Viewer'.fmt(type));

        var outlet = Brochurno.modalsPage.get('containerContentOutlet');
        attViewer.set('value',att.get('fileUrl'));

        this.invokeLast(function () {
          outlet.set('nowShowing',attViewer);
          viewer.append();
        });
      },

      closeAttachment: function () {
        this.gotoState('noModal');
      },

      exitState: function () {
        var viewer = this._viewer;
        if (viewer) {viewer.remove();}
        Brochurno.attachmentController.set('content',null);
      }
    })
  })
});

