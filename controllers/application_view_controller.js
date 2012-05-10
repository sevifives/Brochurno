// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Brochurno.applicationViewController = SC.ObjectController.create(
/** @scope Brochurno.applicationViewController.prototype */ {

  contentSceneNowShowing: null,

  articlePane: null,

  articlesView: null,

  currentArticleBinding: SC.Binding.from('Brochurno.articleController.content'),

  currentArticleIndex: function () {
    var articles = Brochurno.articlesController.get('content');
    var currentArticle = this.get('currentArticle');
    return articles ? articles.indexOf(currentArticle) : null;
  }.property('currentArticle').cacheable(),

  isNextEnabled: function () {
    var articlesLength = this.getPath('articlesView.content.length');
    return this.get('currentArticleIndex') < articlesLength - 1;
  }.property('currentArticleIndex').cacheable(),

  isPreviousEnabled: function () {
    return this.get('currentArticleIndex') > 0;
  }.property('currentArticleIndex').cacheable()

}) ;
