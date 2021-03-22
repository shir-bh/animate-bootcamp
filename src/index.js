//-------------------------------
//         Move the box
//-------------------------------
//
/*
instructions:
  Write a script that will animate the box
  move it 200 pixels to the right over the course of 2 seconds.

Restrictions:
  Don't use any external libraries
  Don't change the html or CSS
  Vanilla JS only :)
*/
document.querySelector(".box").animate(
  [
    // keyframes
    { transform: "translateX(200px)" }
  ],
  {
    // timing options
    duration: 2000,
    iterations: Infinity
  }
);
