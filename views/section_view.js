// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */
sc_require('views/scroll_view');
sc_require('views/middle_list_view');
/** @class

  (Document Your View Here)

  @extends SC.View
*/
Brochurno.SectionView = SC.View.extend(
/** @scope Brochurno.SectionView.prototype */ {

  layout: {left: 0,right: 0,top: 0,bottom: 0},

  content: null,

  classNames: ['section'],

  articlesController: null,

  createChildViews: function () {
    var childViews = [],self=this;
    var object = this.get('content');
    var articlesController = this.get('articlesController');

    view = this.createChildView(Brochurno.ScrollView,{
      layoutBinding: SC.Binding.from('articles',object).oneWay().transform(function (articles) {
        return {top: 0,right: 0,left: (articles && articles.get('length') > 0) ? 400: 0};
      }),
      verticalOverlay: YES,
      isVisibleBinding: SC.Binding.from('*selection.length',articlesController).bool().oneWay().not(),
      contentView: SC.StaticContentView.design({
        classNames: ['section-content'],
        contentBinding: SC.Binding.from('description',object).oneWay()
      })
    });
    childViews.push(view);

    // the list of articles the section has
    view = this.createChildView(Brochurno.ScrollView,{
      layout: {top: 0,left: 0,bottom: 0,width: 400},
      isVisibleBinding: SC.Binding.from('articles',object).notEmpty(null,NO).oneWay(),
      contentView: SC.ListView.design({
        classNames: ['articles'],
        selectionBinding: SC.Binding.from('selection',articlesController),
        contentBinding: SC.Binding.from('articles',object).oneWay(),
        contentValueKey: 'title',
        allowsEmptySelection: NO,
        textAlign: SC.ALIGN_RIGHT,
        action: 'showArticle',
        rowHeight: 100,
        exampleView: SC.ListItemView.extend({
          textAlign: SC.ALIGN_RIGHT,
          renderLabel: function(context, label) {
            var desc = this.getPath('content.description');
            context.push('<label>', label ,'</label>') ;
            if (desc) {
              context.push('<p>',SC.RenderContext.escapeHTML(desc),'</p>');
            }
          },
        }),
        actOnSelect: YES
      })
    });
    childViews.push(view);

    this.set('childViews',childViews);
  }

});
