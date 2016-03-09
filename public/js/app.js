/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

$(document).ready(function() {
  console.log('app.js loaded!');

  var toggle = 0;
  var loop = 0;

  $('#device-shape').click(function(e) {
    e.preventDefault();

    $('#toggle-device').remove();

    var $shape = $(this);
    var $screen = $(this).children('#device-screen');

    if (toggle === 1) {
      // animateRotation(0,90);
      toggle = 0;
      $shape.switchClass('device-shape-vertical', 'device-shape-horizontal', 1000, "linear");
      $screen.switchClass('device-screen-vertical', 'device-screen-horizontal', 1000, "linear", background);
    } else {
      // animateRotation(90,0);
      toggle = 1;
      $shape.switchClass('device-shape-horizontal', 'device-shape-vertical', 1000, "linear");
      $screen.switchClass('device-screen-horizontal', 'device-screen-vertical', 1000, "linear", background);
    }

    $('html, body').animate({
      scrollTop: $(this).offset().top - 150
    }, 500);

  });

  $('#next').click(function(e) {
    e.preventDefault();

    var $title = $('#app-title');
    var $description = $('#app-description');
    var $site = $('#app-link');
    var $github = $('#github-link');
    var $screenH = $('.device-screen-horizontal');
    var $screenV = $('.device-screen-vertical');

    $('html, body').animate({
      scrollTop: $('#device-shape').offset().top - 150
    }, 500);

    if (loop === 3) {
      loop = 0;

      $title.text('Flick Hike');
      $description.text('Flick Hike is a curation driven site for discovering San Francisco via historic film scene locations. Users curate lists of memorable film scenes, plot their own filmic adventures around the city, and share them with others.');
      $site.attr('href', 'http://www.filmhikes.com');
      $github.attr('href', 'https://github.com/isangieri/flick-hike');
      if (toggle === 1) {
        $screenV.css('background', 'url(/images/flick-hike-mobile.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      } else {
        $screenH.css('background', 'url(/images/flick-hike-web.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      }
    } else if (loop === 0) {
      loop = 1;

      $title.text('Evictus');
      $description.text('A web application for publicly documenting evictions in San Francisco, connecting users to tenant’s rights information, and existing advocacy efforts. EvictUs is a social forum where users engage in discussion and commentary about recent San Francisco evictions.');
      $site.attr('href', 'https://sf-evictions-feed.herokuapp.com/');
      $github.attr('href', 'https://github.com/isangieri/sf-eviction-feed');
      if (toggle === 1) {
        $screenV.css('background', 'url(/images/evictus-mobile.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      } else {
        $screenH.css('background', 'url(/images/evictus-web.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      }
    } else if (loop === 1) {
      loop = 2;

      $title.text('Fleeting Beauty');
      $description.text('Fleeting Beauty allows users to unleash their aesthetic judgments upon the internet presence of any place on earth. Users vote on photos of an unnamed place, judging whether they deem them to be "hot" or "not". We store users\' vote data and display it visually using graphs.');
      $site.attr('href', 'http://fleetingbeauty.herokuapp.com/');
      $github.attr('href', 'https://github.com/BreonKnight/fleeking_beauty');
      if (toggle === 1) {
        $screenV.css('background', 'url(/images/fleeting-beauty-mobile.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      } else {
        $screenH.css('background', 'url(/images/fleeting-beauty-web.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      }
    } else if (loop === 2) {
      loop = 3;

      $title.text('Travelogue');
      $description.text('Travelogue is a community driven blog where users may share tips, experiences, and stories about their favorite locations around the world.');
      $site.attr('href', 'https://travelogueone.herokuapp.com/');
      $github.attr('href', 'https://github.com/bachtsui/Travelogue');
      if (toggle === 1) {
        $screenV.css('background', 'url(/images/travelogue-mobile.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      } else {
        $screenH.css('background', 'url(/images/travelogue-web.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      }
    }
  });

  function background() {

    var $screenH = $('.device-screen-horizontal');
    var $screenV = $('.device-screen-vertical');

    if (loop === 0) {
      if (toggle === 0) {
        $screenH.css('background', 'url(/images/flick-hike-web.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      } else if (toggle === 1) {
        $screenV.css('background', 'url(/images/flick-hike-mobile.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      }
    } else if (loop === 1) {
      if (toggle === 0) {
        $screenH.css('background', 'url(/images/evictus-web.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      } else if (toggle === 1) {
        $screenV.css('background', 'url(/images/evictus-mobile.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      }
    } else if (loop === 2) {
      if (toggle === 0) {
        $screenH.css('background', 'url(/images/fleeting-beauty-web.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      } else if (toggle === 1) {
        $screenV.css('background', 'url(/images/fleeting-beauty-mobile.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      }
    } else if (loop === 3) {
      if (toggle === 0) {
        $screenH.css('background', 'url(/images/travelogue-web.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      } else if (toggle === 1) {
        $screenV.css('background', 'url(/images/travelogue-mobile.png) no-repeat scroll 50% 100% / cover padding-box border-box');
      }
    } else {
      return;
    }
  };

  function animateRotation(startangle, endangle) {

    var $device = $('.device-shape');

    $({
      deg: startangle
    }).animate({
      deg: endangle
    }, {
      duration: 500,
      step: function(now) {
        $device.css({
          transform: 'rotate(' + now + 'deg)',
        });
      }
    })

  }

});
