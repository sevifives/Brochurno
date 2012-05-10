// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals CoreBrochurno */

sc_require('models/attachment_model');

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
CoreBrochurno.Image = CoreBrochurno.Attachment.extend(
/** @scope CoreBrochurno.Image.prototype */ {

  attachmentType: SC.Record.attr(String,{defaultValue: 'image'}),

  thumbUrl: SC.Record.attr(String),

  mediumUrl: SC.Record.attr(String)

}) ;
