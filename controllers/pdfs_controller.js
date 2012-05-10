// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Array
*/
Brochurno.pdfsController = SC.ArrayController.create(
/** @scope Brochurno.pdfsController.prototype */ {

  contentBinding: SC.Binding.from('Brochurno.articleController.pdfs')

}) ;
