// ==========================================================================
// Project: Brochurno
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

  attachmentType: SC.Record.attr(String),

  isDefault: SC.Record.attr(Boolean,{defaultValue: NO}),

  filename: SC.Record.attr(String),

  fileUrl: SC.Record.attr(String),

  articles: SC.Record.toMany('CoreBrochurno.Article',{isMaster: NO}),

  generateHtmlForFile: function () {
    return '<div class="attachment %@" data-id="%@" data-type="%@"></div>'.fmt(this.get('attachmentType'),this.get('guid'),this.get('attachmentType'));
  }.property('filename','fileUrl','attachmentType').cacheable()

}) ;
