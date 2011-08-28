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
      enterState: function () {
        var id = Brochurno.sectionsController.getPath('firstObject.guid');
        Brochurno.sectionsController.set('selection',id);
        Brochurno.statechart.sendEvent('openSection',null,id);
      },

      openSection: function (view,value) {
        var section = Brochurno.sectionsController.findProperty('guid',value);
        Brochurno.articleController.set('content',null);
        if (section) {
          Brochurno.sectionController.set('content',section);
          Brochurno.applicationViewController.set('contentSceneNowShowing','Brochurno.sectionPage.'+section.get('name'));
        }
      },

      exitState: function () { }
    })
  })
});
