// Get the button element
const button = document.querySelector('#button');

// Attach an onmouseover event listener to the button
button.onmouseover = function() {
  // Set the top position of the button using the style property
  // and add a CSS transition to create the sliding animation
  button.style.top = '-50px';
  button.style.transition = 'top 0.5s';
};
// Get the button element
const button = document.querySelector('#btn-back-to-top');

// Attach a click event listener to the button
button.addEventListener('click', function() {
  // Scroll to the top of the page using the scrollTo method
  window.scrollTo(0, 0);
});