// ==========================================================================
// Project:   Brochurno - mainPage
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

Brochurno.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: ['content','articleView','footer','header'],

    header: SC.View.design({
      layout: {height: 75,top: 0},

      layerId: 'header',

      childViews: ['tabs','logo'],

      logo: SC.LabelView.design({
        layout: {height: 97, width: 354,left: 10,top: 2},
        layerId: 'main-logo',
        classNames: ['logo']
      }),

      tabs: SC.SegmentedView.design({
        layout: {height: 24, right: 10,bottom: 0},
        align: SC.ALIGN_RIGHT,
        itemsBinding: SC.Binding.oneWay('Brochurno.sectionsController.content'),
        itemTitleKey: 'title',
        itemValueKey: 'guid',
        action: 'openSection',
        valueBinding: SC.Binding.from('Brochurno.sectionsController.selection')
      })
    }),

    content: SC.SceneView.design({
      layerId: 'main-content',
      layout: {top: 75,bottom: 50},
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
      layerId: 'footer',

      logo: SC.LabelView.design({
        layout: {right: 10,height: 41,centerY: 0,width: 150},
        classNames: ['logo'],
        layerId: 'mini-logo'
      })
    })

  })

});
