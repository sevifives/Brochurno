// ==========================================================================
// Project:   Brochurno.modalsPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Brochurno */

// This page describes a part of the interface for your application.
Brochurno.modalsPage = SC.Page.design({

  loadingPanel: SC.PanelPane.design({
  }),

  attachmentViewer: SC.PanelPane.design({
    layout: {left: 100,right: 50,bottom: 50,right: 100},
    layerId: 'attachment-viewer',
    backgroundColor: '#ffffff'
  })
});
