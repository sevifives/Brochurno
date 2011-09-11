// ==========================================================================
// Project:   CoreBrochurno.Section Fixtures
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals CoreBrochurno */

sc_require('models/section_model');

CoreBrochurno.Section.FIXTURES = [
  {
    guid: 1,
    title: 'Home',
    description: "<h2>A richer default brochure application</h2><p>My goal in making this application framework/structure was to provide a base for myself and for others to begin with, I think, more of the annoying parts of an app already handled.</p><h3>What you get in CoreBrochurno</h3><ul><li>Models: Sections.hasMany(Articles.hasMany(\'images\',\'attachments\',\'videos\',\'pdfs\'))</li><li>Sample fixtures: This app!</li></ul><h3>What you get in Brochurno</h3><ul><li>Simple Routing</li><li>Controllers hooking up all the data</li><li>A simple theme</li><li>Default handling of sections, articles, and attachments in those articles</li><li>Articles on lessons learned while using Sproutcore</li><li>Explanations of everything above and more...</li></ul><p>This isn\'t and end-all, be-all of brochure app. I'll be adding to it as I deem a basic necessity. It\'s probably going to be in a pretty consistent state of flux for a while as I iron more out and as I use it for my own other projects. Any and all help would be pretty cool. You can get everything on <a href='https://github.com/sevifives/Brochurno'>github</a>.</p><p>Following a stabilization, I plan to build an admin section that will hook into CoreBrochurno so it'll be even easier to administer a CoreBrochurno-based app. But it's all fed by data, so you don\'t have to wait.</p>",
  },

  {
    guid: 2,
    title: 'About',
    description: 'My valiant attempt to create a sproutcore brochure \'framework\' that I can use and others can reference',
    articles: [1,2,3]
  },

  {
    guid: 3,
    title: 'Lessons',
    description: 'All the little things I have picked up along the way'
  }

];
