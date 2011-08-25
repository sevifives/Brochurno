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

  object: null,

  title: function () {
    return this.getPath('object.title');
  }.property('object.title').cacheable(),

  classNames: ['section'],

  createChildViews: function () {
    var childViews = [],self=this;
    var object = this.get('object');

    view = this.createChildView(SC.StaticContentView,{
      layout: {top: 0,left: 10,right: 10},
      contentBinding: SC.Binding.from('description',object).oneWay()
    });
    childViews.push(view);

    this.set('childViews',childViews);
  }

});
