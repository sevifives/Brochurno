// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Array
*/
Brochurno.sectionsController = SC.ArrayController.create(SCUI.StatusChanged,
/** @scope Brochurno.sectionsController.prototype */ {

  selection: null,

  contentStatusDidChange: function () {
    if (this.get('status') !== SC.Record.READY_CLEAN) { return; }
    Brochurno.statechart.sendEvent('sectionsFinishedLoading');
  },

  scenes: function () {
    var sections = this.get('content');
    if (!sections) { return; }
    var tags = sections.getEach('name');
    for (var i=0,l=tags.length;i<l;i++) {
      tags[i] = 'Brochurno.sectionPage.'+tags[i];
    }
    return tags;
  }.property('content').cacheable()
});
