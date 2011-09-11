// ==========================================================================
// Project:   Brochurno.SectionView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Brochurno */
sc_require('views/scroll_view');
/** @class

  (Document Your View Here)

  @extends SC.View
*/
Brochurno.SectionView = SC.View.extend(
/** @scope Brochurno.SectionView.prototype */ {

  layout: {left: 0,right: 0,top: 0,bottom: 0},

  content: null,

  classNames: ['section'],

  articlesController: null,

  createChildViews: function () {
    var childViews = [],self=this;
    var object = this.get('content');
    var articlesController = this.get('articlesController');

    view = this.createChildView(SC.ScrollView,{
      layoutBinding: SC.Binding.from('articles',object).oneWay().transform(function (articles) {
        return {top: 0,right: 10,left: (articles && articles.get('length') > 0) ? 420: 10};
      }),
      isVisibleBinding: SC.Binding.from('*selection.length',articlesController).bool().oneWay().not(),
      contentView: SC.StaticContentView.design({
        classNames: ['section-content'],
        contentBinding: SC.Binding.from('description',object).oneWay()
      })
    });
    childViews.push(view);

    view = this.createChildView(Brochurno.ScrollView,{
      layout: {top: 0,left: 0,bottom: 0,width: 400},
      isVisibleBinding: SC.Binding.from('articles',object).notEmpty(null,NO).oneWay(),
      contentView: SC.ListView.design({
        classNames: ['articles'],
        selectionBinding: SC.Binding.from('selection',articlesController),
        contentBinding: SC.Binding.from('articles',object).oneWay(),
        contentValueKey: 'title',
        allowsEmptySelection: NO,
        textAlign: SC.ALIGN_RIGHT,
        rowHeight: 100,
        exampleView: SC.ListItemView.extend({textAlign: SC.ALIGN_RIGHT}),
        actOnSelect: YES
      })
    });
    childViews.push(view);

    view = this.createChildView(SC.View,{
      layoutBinding: SC.Binding.from('articles',object).oneWay().transform(function (articles) {
        return {top: 0,right: 0,height: 30,left: (articles && articles.get('length') > 0) ? 420: 10};
      }),
      isVisibleBinding: SC.Binding.from('attachments',object).notEmpty(null,NO).oneWay()
    });
    childViews.push(view)

    this.set('childViews',childViews);
  }

});
