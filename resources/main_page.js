// ==========================================================================
// Project:   Brochurno - mainPage
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

// This page describes the main user interface for your application.  
Brochurno.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['header','content','footer'],

    header: SC.View.design({
      layout: {height: 100,top: 0},

      childViews: ['logo','tabs'],

      logo: SC.LabelView.design({
        layout: {centerY: 0, height: 75, width: 200,left: 10},
        layerId: 'main-logo',
        classNames: ['logo'],
        value: "_Brochurno".loc()
      }),

      tabs: SC.SegmentedView.design({
        layout: {centerY: 0,height: 50, right: 10},
        scenesBinding: SC.Binding.oneWay('Brochurno.sectionsController.content').transform(function (sections) {
          return sections.getEach('tag');
        })
      })
    }),

    content: SC.SceneView.design({
    }),

    footer: SC.View.design({
      layout: {bottom: 0,height: 50},
      childViews: ['logo'],

      logo: SC.LabelView.design({
        layout: {right: 10,height: 25,centerY: 0,width: 85},
        classNames: ['logo'],
        value: "_Brochurno".loc()
      })
    })

  })

});
