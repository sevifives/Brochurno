// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals Brochurno */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Brochurno.main = function main() {

  Brochurno.getPath('mainPage.mainPane').append() ;
  SC.RootResponder.responder.set('defaultResponder',Brochurno.statechart);

  
  Brochurno.statechart.initStatechart();
  Brochurno.registerRoutes();
} ;

function main() { Brochurno.main(); }
