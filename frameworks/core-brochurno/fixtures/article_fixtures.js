// ==========================================================================
// Project: Brochurno
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals CoreBrochurno */

sc_require('models/article_model');

CoreBrochurno.Article.FIXTURES = [

  {
    guid: 1,
    title: 'It has article ability',
    description: 'You can even have sub-sections, a.k.a. articles.',
    body: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    section: 2
  },

  {
    guid: 3,
    title: 'And you can have attachments!',
    description: 'I just blew my own mind.',
    body: "<p><span class=\"attachment-link\" data-id=\"10\" data-type=\"pdf\">Click Me</span>. By using the mouseDown event and some clever classing, you can embed attachments into articles. An admin for this will come later. Or you can embed attachments as icons that interact the same way. Links to other <a href=\"https://github.com/sevifives/Brochurno\">places</a> still work.</p>",
    section: 2,
    pdfs: [10],
    images: [21],
    videos: [31]
  },

  {
    guid: 4,
    title: 'Use Statecharts.',
    description: 'Seriously; they will make your life easier.',
    body:"<h3>Pretty please.</h3><p>No matter how big or, in particular, how small your app is; there is no replacing the functionality you will get when you include statecharts. They allow you to offload view, data, and event manipulation that might otherwise clutter views, controllers, or models. There are a few guides to help you with the standard paradigms, but I\'ve done my best to use them in this app as much as needed.</p><p>I would highly recommend plowing through <a href=\"http://frozencanuck.wordpress.com/tag/ki/\">Michael Cohen's</a> resources to learn some ideas on how to incorporate statecharts further.</p><p>From showing loading messages, hiding views, interacting with date... for your own sanity, please invest your time in statecharts.</p>",
    section: 3
  },

  {
    guid: 5,
    title: 'Bindings, controllers, and your views',
    description: 'KVO/KVC was really weird for me...',
    body:"<h3>What is a binding?</h3><p>I had been introduced to Sproutcore after working on Merb for a couple years so when I saw the MVC nature of Sproutcore... it wasn't normal. What\'s all this noise? A binding is a data path; it is not the data itself.</p><h3>Controllers</h3><p>Controllers are not the hubs to display processed data; they are the link between your model and your view. In reality, your controllers should have hardly any code. Any sort of processed data should be done in your model. Any sort of view manipulation should be done in your (custom) view. Controllers <i>are</i>, however, an excellent place to handle delegation of your views; because delegates tend to have to do with data or user events. The other relevant place is in your statecharts.</p><h3>Views</h3><p>Views are always a little funky to explain. Do you use TemplateView or SCViews? I highly suggest using SC Views over Templates. When I first started using Sproutcore, I would have absolutely loved to have Template views because they were HTML; something I was extremely comfortable with. As I made more and more views with the normal SC structure, the power of separating the idea of HTML from my views, I began to think in terms of an application view, not a website DOM element. Once you make that connection, your perspective of what you\'re building changes: it's no longer a website and it\'s much more powerful. It also makes you hate IE all the more for its limitations.</p>",
    section: 3
  },

  {
    guid: 6,
    title: 'Stop thinking in jQuery',
    description: 'Read about the Sproutcore views;there are more than you can imagine',
    body: "<h3>It\'s not you... it\'s your brain.</h3><p>One of my coworkers is new to SC; he has a strong jQuery background and he overthinks how data should be on the screen. This is pretty normal for people unfamiliar to building an application. I think the best summary I can say is this: jQuery is DOM manipulation; Sproutcore uses jQuery to manipulate the DOM - you don't need to manipulate the DOM.</p><h3>Wait... what?</h3><p>You do not need to manipulate the DOM: you need to make the application views that will display your data. Sproutcore will do the rest for you. When you start getting into creating custom views or overwritting rendering methods you still won't be 'manipulating the DOM'; you will be manipulating your view structure.</p>",
    section: 3
  },

  {
    guid: 7,
    title: 'Build loosely',
    description:"Your data is not always going to be available...",
    body: "<h3>Why is ____ saying it\'s null???!!!!</h3><p><strong>Answer:</strong> because it was.</p><p>That sounds like a d-bag thing to say; once you understand bindings, it\'s just a matter of fact. This is a frequent problem I've experienced and keep hearing new users have. You want to build your views so that they can work with or without data. Bind, don\'t hard-set information. You have to understand that, if your data is setup correctly, it will show up.</p><p>It was a funky system to wrap my head around because I knew I had data. I knew I had access to it. I just didn\'t understand that I didn\'t have specific access to it <i>right then</i>. Build your applications such that you are providing a path to information, not a direct link.</p><p>You\'re building canals for water to run through; you don't have the water flowing, but you know it will.</p>",
    section: 3
  }

];
