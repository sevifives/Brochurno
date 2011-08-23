// ==========================================================================
// Project:   Brochurno.Article
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Brochurno.Article = SC.Record.extend(
/** @scope Brochurno.Article.prototype */ {

  title: SC.Record.attr(String),

  description: SC.Record.attr(String),

  body: SC.Record.attr(String),

  pdfs: SC.Record.toMany('Brochurno.Pdf',{isNested: YES}),

  images: SC.Record.toMany('Brochurno.Image',{isNested: YES}),

  videos: SC.Record.toMany('Brochurno.Video',{isNested: YES})

}) ;
