// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Brochurno.imageController = SC.ObjectController.create(
/** @scope Brochurno.imageController.prototype */ {

  contentBinding: SC.Binding.from('Brochurno.imagesController.selection').single()

}) ;
