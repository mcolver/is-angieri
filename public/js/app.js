/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

$(document).ready(function() {
  console.log('app.js loaded!');

  $("document").ready(function() {

    // Creates canvas 320 × 200 at 10, 50
    var paper = Raphael(10, 50, 320, 200);

    // Creates circle at x = 50, y = 40, with radius 10
    var circle = paper.circle(50, 40, 10);
    // Sets the fill attribute of the circle to red (#f00)
    circle.attr("fill", "#EEEEEE");

    // Sets the stroke attribute of the circle to white
    circle.attr("stroke", "#EEEEEE");

    $("path").hover(function(){
      $(this).css({ stroke: "#EA730B"});
      $(this).css({ stroke: "#000"});
    });

    // css({ fill: "#ff0000" });

    // $("path").mouseenter(function(){
    //   $(this).animate({ stroke: "#EA730B"});
    // });

    // <path fill-rule="evenodd" clip-rule="evenodd" fill="#597C48" stroke="#FF7300" stroke-width="2">

  });


});