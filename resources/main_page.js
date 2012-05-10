// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

sc_require('views/scroll_view');

Brochurno.mainPage = SC.Page.design({

  // layerId is your friend. Just recognize that the same problem exists: distinction
  // Sproutcore doesn't tell you that you have a conflict.
  mainPane: SC.MainPane.design({
    layerId: 'brochurno-app',

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
        layout: {right: 10,bottom: 0,top: 0},
        align: SC.ALIGN_RIGHT,
        itemsBinding: SC.Binding.oneWay('Brochurno.sectionsController.content'),
        itemTitleKey: 'title',
        itemValueKey: 'guid',
        action: 'openSection',
        valueBinding: SC.Binding.from('Brochurno.sectionsController.selection')
      })
    }),

    content: SC.OptimizedContainerView.design({
      layerId: 'main-content',
      layout: {top: 76,bottom: 40},
      reuseChildren: YES,
      // scenesBinding: SC.Binding.oneWay('Brochurno.sectionsController.scenes'),
      nowShowingBinding: SC.Binding.from('Brochurno.applicationViewController.contentSceneNowShowing').oneWay()
    }),

    // this is the singular view for any article selected
    articleView: Brochurno.ScrollView.design({
      layout: {top: 76,bottom: 40,left: 400,right: 0},
      isVisibleBinding: SC.Binding.oneWay('Brochurno.articlesController*selection.length').bool(),
      contentView: SC.StaticContentView.design({
        layout: {right: 20},
        classNames: ['article-content'],
        contentBinding: SC.Binding.oneWay('Brochurno.articleController.fullBody'),
        mouseDown: function (evt) {
          // This is a magical section where I'm able to trigger SC events from your HTML
          // without using SC elements; just classes.
          var target = (evt.originalTarget || evt.target),classNames;
          if (!target || !target.className) {return NO;}
          classNames = target.className.split(' ');
          if (classNames.contains('attachment') || classNames.contains('attachment-link')) {
            Brochurno.statechart.sendEvent('viewAttachment',parseInt(target.attributes['data-id'].value,10),target.attributes['data-type'].value);
            return;
          }
          // Otherwise let the click pass through so that links will still work.
          // returning NO/false means this doesn't handle the click anymore
          return NO;
        }
      })
    }),

    footer: SC.View.design({
      layout: {bottom: 0,height: 40,left: 0,right: 0},
      childViews: ['twitter','github'],
      layerId: 'footer',

      twitter: SC.View.design(SCUI.SimpleButton,{
        layout: {width: 32,height: 32,centerY: 0,right: 6},
        classNames: ['link-button','twitter-icon'],
        icon: 'twitter-icon',
        action: 'openTwitter'
      }),

      github: SC.View.design(SCUI.SimpleButton,{
        layout: {width: 32,height: 30, centerY: 0,right: 44},
        classNames: ['link-button','github-icon'],
        icon: 'github-icon',
        action: 'openGithub'
      })
    })
  })
});
