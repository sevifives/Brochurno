// ==========================================================================
// Project:   Brochurno.ScrollView
// Copyright: @2011 My Company, Inc.
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
