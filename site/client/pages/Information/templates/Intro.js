Template.Intro.helpers({
  image: function () {
    var width = ResponsiveHelpers.deviceWidth();
    var height = ResponsiveHelpers.deviceHeight();

    if (width <= 480) {
      return '/images/Cityscape_480x600.jpg';
    } else if (width <= 768) {
      // vertical device?
      if (height > width) {
        return '/images/Cityscape_768x1024.jpg';
      }
      return '/images/Cityscape_1024x768.jpg';

    } else if (width <= 1024) {
      return '/images/Cityscape_1024x768.jpg';
    } else if (width < 1280) {
      return '/images/Cityscape_1280x800.jpg';
    } else {
      return '/images/Cityscape_1800x1200.jpg';
    }

    console.log('fallback for ', width, height);
    return '/images/Cityscape_480x600.jpg';
  }
});
