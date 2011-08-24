// ==========================================================================
// Project:   Brochurno.sectionsController
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Array
*/
Brochurno.sectionsController = SC.ArrayController.create(SCUI.StatusChanged,
/** @scope Brochurno.sectionsController.prototype */ {

  contentStatusDidChange: function () {
    if (this.get('status') !== SC.Record.READY_CLEAN) { return; }
    Brochurno.statechart.sendEvent('sectionsFinishedLoading');
  }

}) ;
