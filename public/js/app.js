/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

$(document).ready(function() {
  console.log('app.js loaded!');

  var click = 1;

  $('.device-shape').click( function (e) {
    e.preventDefault();

    var $shape = $(this);
    var $screen = $(this).children('.device-screen');

    click ++;

    if (click % 2 === 0) {
      // animateRotation(0,90);
      $shape.switchClass('device-shape-vertical', 'device-shape-horizontal', 1000, "linear");
      $screen.switchClass('device-screen-vertical', 'device-screen-horizontal', 1000, "linear");
    } else {
      // animateRotation(90,0);
      $shape.switchClass('device-shape-horizontal', 'device-shape-vertical', 1000, "linear");
      $screen.switchClass('device-screen-horizontal', 'device-screen-vertical', 1000, "linear");
    }

  });

  function animateRotation(startangle, endangle) {

    var $device = $('.device-shape');

    $({deg: startangle}).animate({deg: endangle}, {
      duration: 500,
      step: function(now) {
        $device.css({transform: 'rotate(' + now + 'deg)',});
      }
    })

  }

});
