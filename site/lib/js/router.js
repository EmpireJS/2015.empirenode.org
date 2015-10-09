Router.configure({
  layoutTemplate: 'AppLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: '404'
});

var filters = {
  scroll: function() {
    Meteor.setTimeout(function() {
      $('.main').animate({
        scrollTop: 0
      }, 400);
    });
    this.next();
  },
  closeMenu: function() {
    Meteor.setTimeout(function() {
      return App.UI.menu && App.UI.menu.close();
    });
    this.next();
  }
};

if (Meteor.isClient) {
  Router.onRun(filters.scroll);
  Router.onBeforeAction(filters.closeMenu);
}

Router.route('/', function () {
  this.render('Information', {});
},{
  name: 'Information',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Information');
    }
    this.next();
  }
});

Router.route('/schedule', function () {
  this.render('Schedule', {});
},{
  name: 'Schedule',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Schedule');
    }
    this.next();
  }
});

Router.route('/getting-here', function () {
  this.render('GettingHere', {});
},{
  name: 'GettingHere',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Getting Here');
    }
    this.next();
  }
});

var redirects = {
  '1': 'https://iojs.org/en/faq.html',
  '2': 'http://www.joyent.com/about/press/joyent-moves-to-establish-nodejs-foundation',
  '3': 'http://venturebeat.com/2015/05/13/node-project-spinoff-io-js-is-moving-to-the-node-js-foundation-with-a-merge-in-progress/',
  '4': 'http://www.cli-nerd.com/2015/09/09/7-reasons-to-upgrade-to-node-v4-now.html',
  '5': 'http://cylonjs.com/blog/2015/04/08/cylon-1.0.0/',
  '6': 'https://medium.com/@rvagg/node-js-io-js-state-of-the-build-arm-2f24c18e1ab4',
  '7': 'http://radar.oreilly.com/2015/06/the-smartest-way-to-program-smart-things-node-js.html',
  '8': 'http://www.bennadel.com/blog/2792-shedding-the-monolithic-application-with-aws-simple-queue-service-sqs-and-node-js.htm',
  '9': 'https://vimeo.com/136965797',
  '10': 'https://github.com/phusion/passenger-docker',
  '11': 'http://www.toptal.com/nodejs/debugging-memory-leaks-node-js-applications',
  '12': 'http://www.nearform.com/nodecrunch/self-detect-memory-leak-node/',
  '13': 'http://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes',
  '14': 'http://javascriptplayground.com/blog/2015/03/node-command-line-tool/',
  '15': 'https://medium.com/startup-study-group/40-npm-modules-we-can-t-live-without-36e29e352e3a',
  '16': 'http://blog.risingstack.com/graphql-overview-getting-started-with-graphql-and-nodejs/',
  '17': 'http://thejackalofjavascript.com/dna-analysis-node-js/'
};

Router.route('/r/:id', {
  action: function (bla) {
    var url = redirects[this.params.id];
    if (url) window.location = url;
    else Router.go('/');
  }
});
