// ==========================================================================
// Project:   CoreBrochurno.Article
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals CoreBrochurno */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
CoreBrochurno.Article = SC.Record.extend(
/** @scope CoreBrochurno.Article.prototype */ {

  title: SC.Record.attr(String),
  
  tag: function () {
    var title = this.get('title');
    if (!title) {return;}
    return title.replace(/[^a-z1-9\s\-\_]/gi,'').dasherize();
  }.property('title').cacheable(),

  name: function () {
    var title = this.get('title');
    if (!title) {return;}
    return title.replace(/[^a-z1-9\s]/ig,'').camelize();
  }.property('title').cacheable(),

  description: SC.Record.attr(String),

  body: SC.Record.attr(String),

  attachments: SC.Record.toMany('CoreBrochurno.Attachment',{isMaster: YES, inverse: 'article', isNested: YES}),

  section: SC.Record.toOne('CoreBrochurno.Section',{isMaster: NO})
}) ;
