// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Array
*/
Brochurno.imagesController = SC.ArrayController.create(
/** @scope Brochurno.imagesController.prototype */ {

  contentBinding: SC.Binding.from('Brochurno.articleController.images')

}) ;
