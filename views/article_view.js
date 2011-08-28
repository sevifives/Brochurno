// ==========================================================================
// Project:   Brochurno.ArticleView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Brochurno */

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

    body: SC.ScrollView.design({
      layout: {left: 10,top: 60,right: 10,bottom: 100},
      contentView: SC.StaticContentView.design({
        contentBinding: SC.Binding.from('Brochurno.articleController.body')
      })
    })
  })

  // createChildViews: function () {
  //   var content = this.get('content'), cvs = [];

  //   var view = this.createChildView(SC.LabelView,{
  //     layout: {left: 10,right: 10,top: 10,height: 40},
  //     valueBinding: SC.Binding.from('description',content).oneWay()
  //   });
  //   cvs.push(view);

  //   view = this.createChildView(SC.ScrollView,{
  //     layout: {top: 60,left: 10,right: 10,bottom: 100},
  //     contentView: SC.StaticContentView.design({
  //       contentBinding: SC.Binding.from('body',content).oneWay()
  //     })
  //   });
  //   cvs.push(view);

  //   this.set('childViews',cvs);
  // }
});
