Brochurno.mixin({
  registerRoutes: function () {
    SC.routes.add('section/:id/:name',Brochurno,'selectSection');
  },

  selectSection: function (params) {
    Brochurno.sectionsController.set('selection',parseInt(params.id,10));
  }
});
