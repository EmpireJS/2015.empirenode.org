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
      Meta.setTitle('Empire Node 2015 | Information');
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
      Meta.setTitle('Empire Node 2015 | Schedule');
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
      Meta.setTitle('Empire Node 2015 | Getting Here');
    }
    this.next();
  }
});




