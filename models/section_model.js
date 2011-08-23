// ==========================================================================
// Project:   Brochurno.Section
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Brochurno.Section = SC.Record.extend(
/** @scope Brochurno.Section.prototype */ {

  title: SC.Record.attr(String),

  description: SC.Record.attr(String),

  articles: SC.Record.toMany('Brochurno.Article',{isNested: YES})

}) ;
