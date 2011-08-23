// ==========================================================================
// Project:   Brochurno.Attachment
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Brochurno.Attachment = SC.Record.extend(
/** @scope Brochurno.Attachment.prototype */ {

  title: SC.Record.attr(String),

  isDefault: SC.Record.attr(Boolean,{defaultValue: NO}),

  filename: SC.Record.attr(String),

  fileUrl: SC.Record.attr(String)

}) ;
