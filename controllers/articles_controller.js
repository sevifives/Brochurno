// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Array
*/
Brochurno.articlesController = SC.ArrayController.create(
/** @scope Brochurno.articlesController.prototype */ {
  contentBinding: SC.Binding.from('Brochurno.sectionController.articles')
}) ;
