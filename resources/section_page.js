// ==========================================================================
// Project:   Brochurno.sectionPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Brochurno */

// This page describes a part of the interface for your application.
Brochurno.sectionPage = SC.Page.design({

  sectionPage: SC.View.extend({
    childViews: ['title'],

    classNames: ['section'],

    title: SC.LabelView.design({
      layout: {left: 10,height: 50,width: 150},
      valueBinding: SC.Binding.oneWay('Brochurno.sectionController.title')
    })
  }),

  _createdSections: {},

  unknownProperty: function (k,name) {
    console.log(k,name);
    var createdSections = this._createdSections;
    if (createdSections[name]) {return createdSections[name];}

    var view = this.get('section').create({
      layerId: name
    });

    return this._createdSections[name] = view;
  }.property()
});
