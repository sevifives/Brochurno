// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals CoreBrochurno */

sc_require('models/section_model');

CoreBrochurno.Section.FIXTURES = [
  {
    guid: 1,
    title: 'Home',
    description: "<h2>A richer default brochure application</h2><p>My goal in making this application framework/structure was to provide a base for myself and for others to begin with, I think, more of the annoying parts of an app already handled.</p><h3>What you get in CoreBrochurno</h3><ul><li>Models: Sections.hasMany(Articles.hasMany(\'images\',\'attachments\',\'videos\',\'pdfs\'))</li><li>Sample fixtures: This app!</li></ul><h3>What you get in Brochurno</h3><ul><li>Simple Routing</li><li>Controllers hooking up all the data</li><li>A simple theme</li><li>Default handling of sections, articles, and attachments in those articles</li><li>Articles on lessons learned while using Sproutcore</li><li>Explanations of everything above and more...</li></ul><h3>What you don\'t get</h3><ul><li>An awesome theme: I'll let you handle that</li><li>Simple install: I\'ll write some instructions. This is an, I think, ideal base setup to really that takes care of the annoying intricacies.</li><li>A perfect solution: you may not agree with some tactics I\'ve taken and that\'s great! Develop your own. Make it better!</li></ul><p>This isn\'t and end-all, be-all of brochure app. I'll be adding to it as I deem a basic necessity. It\'s probably going to be in a pretty consistent state of flux for a while as I iron more out and as I use it for my own other projects. Any and all help would be pretty cool. You can get everything on <a href='https://github.com/sevifives/Brochurno'>github</a>.</p><p>Following a stabilization, I plan to build an admin section that will hook into CoreBrochurno so it'll be even easier to administer a CoreBrochurno-based app. But it's all fed by data, so you don\'t have to wait.</p>",
  },

  {
    guid: 2,
    title: 'About',
    description: '<h2>What you can expect to see...</h2><p>This is just a demonstration area of what you can expect to see from Brochurno. The lessons area will get into better explanations of how I\'ve used Sproutcore and also some paradgims that have become familiar.</p>',
    articles: [1,3]
  },

  {
    guid: 3,
    title: 'Lessons',
    description: "<h2>Some things I wish I had known when I first started.</h2><p>Sproutcore isn\'t the easiest framework for a front-end person to use; it might not be as easy for a person familiar with KVO/KVC MVC, but it can be mastered. Here are some tips, methods, paradigms, and other solutions might be found. If you happen to know of any, I\'d be happy to add them in and give any credit where it is due.</p>",
    articles: [4,5,6,7]
  }

];
