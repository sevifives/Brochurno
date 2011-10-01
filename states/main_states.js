/**
 * Brochurno main statechart
 *
 * @author Jason Dooley
 * License: Licened under MIT license (see license.js)
 */
/*globals Brochurno CoreBrochurno  */

Brochurno.mixin({
  mainStates: SC.State.design({
    initialSubstate: 'brochurnoLoading',

    brochurnoLoading: SC.State.design({
      enterState: function () {
        Brochurno.sectionsController.set('content',Brochurno.store.find(Brochurno.Section));
      },

      sectionsFinishedLoading: function () {
        this.gotoState('brochurnoReady');
      }
    }),

    brochurnoReady: SC.State.design({

      normalStartup: function () {
        var id = Brochurno.sectionsController.getPath('firstObject.guid');
        Brochurno.sectionsController.set('selection',id);
        Brochurno.statechart.sendEvent('openSection',null,id);
      },

      _selectSection: function (section) {
        if (!section) {return;}
        Brochurno.sectionController.set('content',section);
        Brochurno.applicationViewController.set('contentSceneNowShowing','Brochurno.sectionPage.'+section.get('name'));
      },

      openSection: function (view,value) {
        var section = Brochurno.sectionsController.findProperty('guid',value);
        Brochurno.articleController.set('content',null);
        if (section) {
          this._selectSection(section);
          SC.routes.informLocation('location','section/%@/%@'.fmt(section.get('id'),section.get('tag')));
        }
      },

      openArticleFromId: function (articleId) {
        var article = Brochurno.store.find(Brochurno.Article,parseInt(articleId,10));
        Brochurno.sectionsController.set('selection',parseInt(article.getPath('section.guid'),10));
        this._selectSection(article.get('section'));
        Brochurno.articlesController.selectObject(article);
      },

      showArticle: function (listView,obj) {
        var article = obj.firstObject ? obj.get('firstObject') : obj;
        if (!article) {return;}
        SC.routes.informLocation('article','article/%@/%@'.fmt(article.get('id'),article.get('tag')));
      }

    })
  })
});
