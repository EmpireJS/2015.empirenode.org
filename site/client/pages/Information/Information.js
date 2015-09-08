Template.Information.rendered = function () {
  App.UI.fullScreenContainer(this.$('.full-screen-container'));
  // if (ResponsiveHelpers.isXs()) {
  //   Meteor.setTimeout(function() {
  //     sAlert.info('<a href="https://docs.google.com/forms/d/1qUgKrfhuAOpsmqCE-9blPOyd2m7WjeuaO7qBdDdmARM" target="_blank" class="default-color">Call for Speakers is now Open!</a>', {html: true});
  //   }, 2000);
  // }

};

var $onResize = function(event) {
  App.UI.fullScreenContainer($('.full-screen-container'));
}

var debouncedOnResize = _.debounce($onResize, 300);

Meteor.startup(function() {
  $(window).on('resize', debouncedOnResize);
});
