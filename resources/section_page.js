// ==========================================================================
// Project:   Brochurno.sectionPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Brochurno */

sc_require('views/section_view');
// This page describes a part of the interface for your application.
Brochurno.sectionPage = SC.Page.design(SC.Enumerable,{

  _createdSections: {},

  unknownProperty: function (k,name) {
    // console.log(k,name);
    var createdSections = this._createdSections;
    if (createdSections[name]) {return createdSections[name];}

    var view = Brochurno.SectionView.create({
      layerId: name,
      title:'test' 
    });

    return this._createdSections[name] = view;
  }.property()
});
