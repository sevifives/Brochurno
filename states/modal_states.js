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
      enterState: function () {
        console.log('No Modal');
      }
    })
  })
});

