// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Brochurno.videoController = SC.ObjectController.create(
/** @scope Brochurno.videoController.prototype */ {

  contentBinding: SC.Binding.from('Brochurno.videosController.selection').single()

}) ;
