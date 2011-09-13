Brochurno.mixin({
  registerRoutes: function () {
    SC.routes.add('',Brochurno,'defaultStart');    
    SC.routes.add('section/:id/:name',Brochurno,'selectSection');
    SC.routes.add('article/:id/:name',Brochurno,'openArticle');
  },

  selectSection: function (params) {
    var id = parseInt(params.id,10);
    Brochurno.sectionsController.set('selection',id);
    Brochurno.statechart.sendEvent('openSection',null,id);
  },

  openArticle: function (params) {
    Brochurno.statechart.sendEvent('openArticleFromId',params.id);
  },

  defaultStart: function (params) {
    Brochurno.statechart.sendEvent('normalStartup');
  }
});
