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

  title: null,

  classNames: ['section'],

  createChildViews: function () {
    var childViews = [],self=this;
    var view = this.createChildView(SC.LabelView,{
      classNames: ['section-title'],
      layout: {left: 10,height: 50,width: 150},
      valueBinding: SC.Binding.from('title',self)
    });

    childViews.push(view);

    this.set('childViews',childViews);
  }

});
