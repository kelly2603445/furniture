const minValue = document.getElementById("min-value");
const maxValue = document.getElementById("max-value");
const minRange = document.querySelector(".min-price");
const maxRange = document.querySelector(".max-price");
const rangeFill = document.querySelector(".range-fill");

function updateRange() {
    let min = parseInt(minRange.value);
    let max = parseInt(maxRange.value);

    if (min > max) {
        [min, max] = [max, min];
    }

    minValue.textContent = `$${min}`;
    maxValue.textContent = `$${max}`;

    // Calculate fill position
    const minPercent = ((min - parseInt(minRange.min)) / (parseInt(minRange.max) - parseInt(minRange.min))) * 100;
    const maxPercent = ((max - parseInt(maxRange.min)) / (parseInt(maxRange.max) - parseInt(maxRange.min))) * 100;

    rangeFill.style.left = minPercent + "%";
    rangeFill.style.width = (maxPercent - minPercent) + "%";
}

// Initialize
minRange.addEventListener("input", updateRange);
maxRange.addEventListener("input", updateRange);
updateRange();


// Hamburger menu functionality
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.navbar');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active'); // Toggle active class for hamburger
});
// Hide navbar and reset hamburger on scroll
window.addEventListener('scroll', () => {
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
  });