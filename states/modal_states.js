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
      }
    }),

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
    })
  })
});

