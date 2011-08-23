// ==========================================================================
// Project:   Brochurno.sectionController
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Brochurno.sectionController = SC.ObjectController.create(
/** @scope Brochurno.sectionController.prototype */ {

  contentBinding: SC.Binding.from('Brochurno.sectionsController.selection').single()

}) ;
