// ==========================================================================
// Project:   CoreBrochurno.Attachment
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals CoreBrochurno */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
CoreBrochurno.Attachment = SC.Record.extend(
/** @scope CoreBrochurno.Attachment.prototype */ {

  title: SC.Record.attr(String),

  isDefault: SC.Record.attr(Boolean,{defaultValue: NO}),

  filename: SC.Record.attr(String),

  fileUrl: SC.Record.attr(String)

}) ;
