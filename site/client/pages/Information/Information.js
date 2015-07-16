Template.Information.rendered = function () {
  App.UI.fullScreenContainer(this.$('.full-screen-container'));
};

var $onResize = function(event) {
  App.UI.fullScreenContainer($('.full-screen-container'));
}

var debouncedOnResize = _.debounce($onResize, 300);

Meteor.startup(function() {
  $(window).on('resize', debouncedOnResize);
});
