// ==========================================================================
// Project:   Brochurno - mainPage
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

Brochurno.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: ['header','content','articleView','footer'],

    header: SC.View.design({
      layout: {height: 100,top: 0},

      childViews: ['tabs','logo'],

      logo: SC.LabelView.design({
        layout: {centerY: 0, height: 75, width: 200,left: 10},
        layerId: 'main-logo',
        classNames: ['logo'],
        value: "_Brochurno".loc()
      }),

      tabs: SC.SegmentedView.design({
        layout: {centerY: 0,height: 50, right: 10},
        align: SC.ALIGN_RIGHT,
        itemsBinding: SC.Binding.oneWay('Brochurno.sectionsController.content'),
        itemTitleKey: 'title',
        itemValueKey: 'guid',
        action: 'openSection',
        valueBinding: SC.Binding.from('Brochurno.sectionsController.selection')
      })
    }),

    content: SC.SceneView.design({
      layout: {top: 100,bottom: 50},
      scenesBinding: SC.Binding.oneWay('Brochurno.sectionsController.scenes'),
      nowShowingBinding: SC.Binding.from('Brochurno.applicationViewController.contentSceneNowShowing').oneWay()
    }),

    articleView: SC.ScrollView.design({
      layout: {top: 100,bottom: 50,left: 420,right: 0},
      isVisibleBinding: SC.Binding.oneWay('Brochurno.articlesController*selection.length').bool(),
      contentView: SC.StaticContentView.design({
        contentBinding: SC.Binding.oneWay('Brochurno.articleController.body')
      })
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
