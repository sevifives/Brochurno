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
CoreBrochurno.Video = CoreBrochurno.Attachment.extend(
/** @scope CoreBrochurno.Video.prototype */ {

  attachmentType: SC.Record.attr(String,{defaultValue: 'video'}),

  quality: SC.Record.attr(String)

}) ;
