// ==========================================================================
// Project:   CoreBrochurno.Section
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
    return title.replace(/[^\w\s]/g,'').dasherize();
  }.property('title').cacheable(),

  description: SC.Record.attr(String),

  articles: SC.Record.toMany('CoreBrochurno.Article',{isNested: YES})

}) ;
