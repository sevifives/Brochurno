/**
 * Brochurno statechart
 *
 * @author Jason Dooley
 * License: Licened under MIT license (see license.js)
 */
/*globals CoreBrochurno Brochurno */

Brochurno.statechart = SC.Statechart.create( /** @scope Mailer */ {
  rootState: SC.State.design({
    substatesAreConcurrent: YES,

    mainStates: SC.State.plugin('Brochurno.mainStates'),

    modalStates: SC.State.plugin('Brochurno.modalStates')
    
  })
});
