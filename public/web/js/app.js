/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
var appointmentForm = document.querySelector('.appointment-form');
var currentTab = 0;
if (appointmentForm) {
  var updateStep = function updateStep(step) {
    steps.forEach(function (step, ind) {
      if (ind !== currentTab) {
        step.style.display = "none";
      }
    });
  };
  var steps = document.querySelectorAll('.appointment-form .step');
  var prevBtn = document.querySelector('.prevBtn');
  var nextBtn = document.querySelector('.nextBtn');
  if (currentTab == 0) {
    prevBtn.style.display = "none";
  }
  if (currentTab === steps.length) {
    nextBtn.style.display = "none";
  }
  updateStep(0);
  nextBtn.addEventListener('click', function (e) {
    currentTab = currentTab + 1;
    updateStep(currentTab);
  });
}
/******/ })()
;