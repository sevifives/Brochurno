// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Brochurno.pdfController = SC.ObjectController.create(
/** @scope Brochurno.pdfController.prototype */ {

  contentBinding: SC.Binding.from('Brochurno.pdfsController.selection').single()

}) ;
