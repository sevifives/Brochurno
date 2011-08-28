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

  description: SC.Record.attr(String),

  body: SC.Record.attr(String),

  pdfs: SC.Record.toMany('CoreBrochurno.Pdf',{isMaster: YES,inverse: 'article',isNested: YES}),

  images: SC.Record.toMany('CoreBrochurno.Image',{isMaster: YES,inverse: 'article',isNested: YES}),

  videos: SC.Record.toMany('CoreBrochurno.Video',{isMaster: YES,inverse: 'article',isNested: YES}),

  section: SC.Record.toOne('CoreBrochurno.Section',{isMaster: NO})

}) ;
