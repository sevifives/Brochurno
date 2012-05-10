// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

sc_require('views/scroller_view');
/** @class

  (Document Your View Here)

  @extends SC.View
*/
Brochurno.ScrollView = SC.ScrollView.extend(
/** @scope Brochurno.ScrollView.prototype */ {

  verticalOverlay: YES,

  horizontalOverlay: YES,

  verticalScrollerView: Brochurno.ScrollerView,

  horizontalScrollerView: Brochurno.ScrollerView

});
