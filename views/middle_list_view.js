// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

/** @class

  (Document Your View Here)

  @extends SC.ListView
*/
Brochurno.MiddleListView = SC.ListView.extend(
/** @scope Brochurno.MiddleListView.prototype */ {

  startInMiddle: YES,

  heightOffset: function () {
    var height = (this.get('frame').height/2) - (this.get('rowHeight')/2);
    return height;
  }.property('frame').cacheable(),

  /**
    The layout for a ListView is computed from the total number of rows 
    along with any custom row heights.
  */
  computeLayout: function() {
    // default layout
    var ret = this._sclv_layout;
    if (!ret) ret = this._sclv_layout = {};
    ret.minHeight = this.rowOffsetForContentIndex(this.get('length'));
    if (this.get('startInMiddle')) {
      ret.minHeight = this.get('heightOffset') * 2;
    }
    this.set('calculatedHeight',ret.minHeight);
    return ret ;
  },
  
  /**
    Computes the layout for a specific content index by combining the current
    row heights.
    
    @param {Number} contentIndex
    @returns {Hash} layout hash for the index provided
  */
  layoutForContentIndex: function(contentIndex) {
    var del = this.get('rowDelegate');
    
    if (this.get('startInMiddle')) {
      this.get('');
    }

    return {
      top: this.rowOffsetForContentIndex(contentIndex) + this.get('heightOffset'),
      height: this.rowHeightForContentIndex(contentIndex) - del.get('rowPadding') * 2,
      left: 0,
      right: 0
    };
  },

});
