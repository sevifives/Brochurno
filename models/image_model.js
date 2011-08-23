// ==========================================================================
// Project:   Brochurno.Image
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

sc_require('models/attachment_model');

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Brochurno.Image = Brochurno.Attachment.extend(
/** @scope Brochurno.Image.prototype */ {

  thumbUrl: SC.Record.attr(String),

  mediumUrl: SC.Record.attr(String)

}) ;
