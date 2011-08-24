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
        console.log('Brochurno loading...');

        Brochurno.sectionsController.set('content',Brochurno.store.find(Brochurno.Section));
      },

      sectionsFinishedLoading: function () {
        this.gotoState('brochurnoReady');
      }
    }),

    brochurnoReady: SC.State.design({
      enterState: function () {
        console.log('Sections Loaded.');
        Brochurno.applicationViewController.set('contentSceneNowShowing','Brochurno.sectionPage.home');
      }
    })
  })
});
