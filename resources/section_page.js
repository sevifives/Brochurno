// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

sc_require('views/section_view');
// This page describes a part of the interface for your application.
Brochurno.sectionPage = SC.Page.design(SC.Enumerable,{

  _createdSections: {},


  // This is where some magic happens:
  // Because I want to have a dynamic amount of sections,
  // I need to be able to generate them on the fly and then cache them.
  // By accessing unknown property, I generate the views the sceneView
  // will have to display or return them if I've already created them.
  unknownProperty: function (name) {
    // Access the above private function
    var createdSections = this._createdSections;
    // Oh? I have it already! Awesome!
    if (createdSections[name]) {return createdSections[name];}

    // Guess I don't have you. Well aren't you a pretty name... let's make you a view.
    // Find the section
    var dashed = name.dasherize();
    var object = Brochurno.sectionsController.findProperty('tag',dashed);
    // generate a view.
    var view = Brochurno.SectionView.create({
      layerId: dashed,
      // inject the section object
      content: object,
      // This is kind of iffy... I'm passing in the same controller
      // each time, so why wouldn't I just do that in the custom view?
      // Because it's just a step-by-step process so you can
      // insert controllers your own way.
      // The structure of my views reuses the same articleView
      // instead of generating one for each section. Again, that's a
      // choice I made to minimize DOM elements.
      articlesController: Brochurno.articlesController
    });

    return this._createdSections[name] = view;
  }.property()
});
