// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

// This page describes a part of the interface for your application.
Brochurno.modalsPage = SC.Page.design({

  // Outles are a method to access inner views of inner views
  containerContentOutlet: SC.outlet('attachmentViewer.contentView.contentViewer'),

  attachmentViewer: SC.PanelPane.design({
    layout: {left: 100,top: 50,bottom: 50,right: 100},
    layerId: 'attachment-viewer',
    backgroundColor: '#ffffff',
    contentView: SC.View.design({
      childViews: ['closeButton','contentViewer'],
      contentViewer: SC.ContainerView.design({
        layout: {bottom: 36}
      }),
      closeButton: SC.ButtonView.design({
        layout: {width: 100,height: 24,bottom: 6,right: 6},
        classNames: ['close'],
        title: "_Close".loc(),
        action: 'closeAttachment'
      })
    })
  }),

  // The type of views I access for the types of attachments
  pdfViewer: SC.WebView,

  imageViewer: SC.ScrollView.design({
    value: null,
    contentView: SC.ImageView.design({
      valueBinding: SC.Binding.oneWay('.parentView.parentView.value')
    })
  }),

  videoViewer: SC.View.design({
    value: null,

    childViews: ['video','controls'],

    video: SC.VideoView.design({
      valueBinding: SC.Binding.from('.parentView.value'),
    }),

    controls: SC.MiniMediaControlsView.design({
      layout: { bottom:0, left: 0, right: 0, height: 20 },
      targetBinding: SC.Binding.from('.parentView.video')
    })
  })

});
