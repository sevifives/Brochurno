// ==========================================================================
// Project:   Brochurno.ArticleView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Brochurno */
sc_require('views/scroll_view');
/** @class

  (Document Your View Here)

  @extends SC.View
*/
Brochurno.ArticleView = SC.PickerPane.extend(
/** @scope Brochurno.ArticleView.prototype */ {
  content: null,

  contentView: SC.View.design({
    childViews: ['description','body'],

    description: SC.LabelView.design({
      layout: {left: 10, right: 10,top: 10,height: 40},
      valueBinding: SC.Binding.oneWay('Brochurno.articleController.description')
    }),

    body: Brochurno.ScrollView.design({
      layout: {left: 10,top: 60,right: 10,bottom: 100},
      contentView: SC.StaticContentView.design({
        contentBinding: SC.Binding.from('Brochurno.articleController.body')
      })
    })
  })
});
