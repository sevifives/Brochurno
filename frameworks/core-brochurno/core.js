/**
 * The core objects of the Brochurno framework
 * @author Jason Dooley
 */
 /*globals CoreBrochurno*/
CoreBrochurno = SC.Object.create({
  /**
   * Initializes the main store with the given data source.
   */
  initStore: function() {
    
    // console.log('DEBUG: initStore() store=', this.get('store'));
    if(SC.none(this.get('store'))) { // not already initialized

      // Create the appropriate data source.
      var dataSource;
      if (CoreBrochurno.get('dataSourceType') === CoreBrochurno.REMOTE_DATA_SOURCE) {
        dataSource = CoreBrochurno.CachingRemoteDataSource.create();
        SC.Logger.log('Using caching remote data source.');
      }
      else { // FIXTURES_DATA_SOURCE
        dataSource = SC.FixturesDataSource.create();
        SC.Logger.log('Using fixtures data source.');
      }

      // Create the store itself.
      var store = CoreBrochurno.Store.create();
      store.set('dataSource', dataSource);

      // Load data from local storage.
      if (dataSource.loadCachedRecords) {
        dataSource.loadCachedRecords();
      }

      this.set('store', store);
      
    }
  }
});
