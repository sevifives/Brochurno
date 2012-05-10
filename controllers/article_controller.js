// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Brochurno.articleController = SC.ObjectController.create(
/** @scope Brochurno.articleController.prototype */ {
  contentBinding: SC.Binding.from('Brochurno.articlesController.selection').single()
}) ;
