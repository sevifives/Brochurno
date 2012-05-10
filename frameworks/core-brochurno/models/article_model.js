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

  fullBody: function () {
    var attachments = [],body,files;
    ['images','videos','pdfs'].forEach(function (type) {
      files = this.get(type);
      if (files) {attachments = attachments.concat(files.toArray());}
    },this);
    body = this.get('body');
    if (attachments && (attachments.get ? attachments.get('length') : attachments.length) > 0) {
      body += '<div class="attachments">' + attachments.getEach('generateHtmlForFile').join('') + '</div>';
    }
    return body;
  }.property('pdfs','images','videos','body').cacheable(),

  images: SC.Record.toMany('CoreBrochurno.Image',{isMaster: YES, inverse: 'articles'}),

  pdfs: SC.Record.toMany('CoreBrochurno.Pdf',{isMaster: YES, inverse: 'articles'}),

  videos: SC.Record.toMany('CoreBrochurno.Video',{isMaster: YES, inverse: 'articles'}),

  section: SC.Record.toOne('CoreBrochurno.Section',{isMaster: NO})
}) ;
