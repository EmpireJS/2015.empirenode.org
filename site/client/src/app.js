App = function() {

    $(function() {
        iOS();
        widgetToggle();
        widgetClose();
    });

    // if the user is using ios we want to know so we can adjust the header to account for the top bar
      var iOS = function() {
        var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
        var standalone = ("standalone" in window.navigator) && window.navigator.standalone;
        Session.set('iOS-standalone', iOS && standalone);
      };

    var widgetToggle = function() {
        $(document).on('click', '.actions > .fa-chevron-down, .actions > .fa-chevron-up', function() {
            $(this).parent().parent().next().slideToggle("fast"), $(this).toggleClass("fa-chevron-down fa-chevron-up");
        });
    };

    var widgetClose = function() {
        $(document).on('click', '.actions > .fa-times', function() {
            $(this).parent().parent().parent().fadeOut();
        });
    };

    var fullScreenContainer = function($selector, headerSize) {
      headerSize = headerSize || 0;
      // Set Initial Screen Dimensions

      var screenWidth = $(window).width();
      var screenHeight = $(window).height() - headerSize;

      $selector.css({
        width: screenWidth + "px",
        height: screenHeight + "px"
      });

    };

    return {
        UI: {
            fullScreenContainer: fullScreenContainer
        }
    };
}();
