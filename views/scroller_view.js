// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Brochurno.ScrollerView = SC.ScrollerView.extend(
  /** @scope Brochurno.ScrollerView.prototype */{
  hasButtons: NO,
  scrollbarThickness: 10,
  capLength: 12,
  capOverlap: 10,
  buttonLength: 16,
  buttonOverlap: 10
});
