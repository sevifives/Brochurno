// ==========================================================================
// Project:   Brochurno.Video
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

sc_require('models/attachment_model');

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Brochurno.Video = Brochurno.Attachment.extend(
/** @scope Brochurno.Video.prototype */ {

  quality: SC.Record.attr(String)

}) ;
