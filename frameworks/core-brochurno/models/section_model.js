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
CoreBrochurno.Section = SC.Record.extend(
/** @scope CoreBrochurno.Section.prototype */ {

  title: SC.Record.attr(String),

  tag: function () {
    var title = this.get('title');
    if (!title) {return;}
    return title.replace(/[^a-z1-9\s\-\_]/ig,'').dasherize();
  }.property('title').cacheable(),

  name: function () {
    var title = this.get('title');
    if (!title) {return;}
    return title.replace(/[^a-z1-9\s]/ig,'').camelize();
  }.property('title').cacheable(),

  description: SC.Record.attr(String),

  articles: SC.Record.toMany('CoreBrochurno.Article',{inverse: 'section',isMaster: YES}),

  section: SC.Record.toOne('CoreBrochurno.Section',{isMaster: NO})

}) ;
