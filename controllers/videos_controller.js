// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Array
*/
Brochurno.videosController = SC.ArrayController.create(
/** @scope Brochurno.videosController.prototype */ {

  contentBinding: SC.Binding.from('Brochurno.articleController.videos')

}) ;
