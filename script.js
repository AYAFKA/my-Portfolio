"use strict";

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header"); // Select the header
  const home = document.querySelector(".home"); // Select the home section

  // Get the header's height
  const headerHeight = header.offsetHeight;

  // Apply padding-top to the home section
  home.style.paddingTop = `${headerHeight + 30}px`; // Add some extra space for separation
});
