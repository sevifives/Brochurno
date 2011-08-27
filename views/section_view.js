// ==========================================================================
// Project:   Brochurno.SectionView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Brochurno.SectionView = SC.View.extend(
/** @scope Brochurno.SectionView.prototype */ {

  content: null,

  classNames: ['section'],

  createChildViews: function () {
    var childViews = [],self=this;
    var object = this.get('content');

    view = this.createChildView(SC.StaticContentView,{
      layoutBinding: SC.Binding.from('articles',object).oneWay().transform(function (articles) {
        return {top: 0,left: 10,right: (articles && articles.get('length') > 0) ? 0.5: 10};
      }),
      contentBinding: SC.Binding.from('description',object).oneWay()
    });
    childViews.push(view);

    view = this.createChildView(SC.ScrollView,{
      layout: {top: 0,right: 0,bottom: 0,width: 0.5},
      isVisibleBinding: SC.Binding.from('articles',object).notEmpty(null,NO).oneWay(),
      contentView: SC.ListView.design({
        backgroundColor: 'rgba(0,0,0,0.5)',
        classNames: ['articles'],
        contentBinding: SC.Binding.from('articles',object).oneWay(),
        contentValueKey: 'title',
        exampleView: SC.LabelView
      })
    });
    childViews.push(view);

    this.set('childViews',childViews);
  }

});
