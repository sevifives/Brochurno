// ==========================================================================
// Project:   Brochurno - mainPage
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

sc_require('views/scroll_view');

Brochurno.mainPage = SC.Page.design({

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

    content: SC.SceneView.design({
      layerId: 'main-content',
      layout: {top: 76,bottom: 30},
      scenesBinding: SC.Binding.oneWay('Brochurno.sectionsController.scenes'),
      nowShowingBinding: SC.Binding.from('Brochurno.applicationViewController.contentSceneNowShowing').oneWay()
    }),

    articleView: Brochurno.ScrollView.design({
      layout: {top: 76,bottom: 30,left: 400,right: 0},
      isVisibleBinding: SC.Binding.oneWay('Brochurno.articlesController*selection.length').bool(),
      contentView: SC.StaticContentView.design({
        layout: {right: 20},
        classNames: ['article-content'],
        contentBinding: SC.Binding.oneWay('Brochurno.articleController.fullBody'),
        mouseDown: function (evt) {
          var target = (evt.originalTarget || evt.target),classNames;
          if (!target || !target.className) {return NO;}
          classNames = target.className.split(' ');
          if (classNames.contains('attachment') || classNames.contains('attachment-link')) {
            Brochurno.statechart.sendEvent('viewAttachment',parseInt(target.attributes['data-id'].value,10),target.attributes['data-type'].value);
            return;
          }
          return NO;
        }
      })
    }),

    footer: SC.View.design({
      layout: {bottom: 0,height: 30},
      childViews: ['twitter'],
      layerId: 'footer',

      twitter: SC.View.design({
        layout: {width: 100,height: 24,centerY: 0,right: 6},
        classNames: ['link-button'],
        icon: 'twitter-icon',
        render: function (context,firstTime) {
          if (firstTime) {
            var twitter = '<a href="http://twitter.com/sevifives" class="twitter-follow-button" data-button="grey" data-text-color="#FFFFFF" data-link-color="#00AEFF" data-show-count="false">Follow @sevifives</a>';
            context.push(twitter);
            context.push('<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>');
          }
        }
      })

      // github: SC.LabelView.design(SCUI.SImpleButton,{
      //   layout: {width: 24,height: 24,centerY: 0,right: 6},
      //   classNames: ['link-button'],
      //   icon: 'github-icon',
      //   action: 'openGithub'
      // })
    })

  })

});
