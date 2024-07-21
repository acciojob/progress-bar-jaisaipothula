document.addEventListener('DOMContentLoaded', () => {
  const circles = document.querySelectorAll('.circle');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentActive = 0;

  // Initially disable prev button
  prevButton.disabled = true;

  // Event listener for next button
  nextButton.addEventListener('click', () => {
    if (currentActive < circles.length - 1) {
      currentActive++;
      updateCircles();
    }
  });

  // Event listener for prev button
  prevButton.addEventListener('click', () => {
    if (currentActive > 0) {
      currentActive--;
      updateCircles();
    }
  });

  // Function to update circles based on currentActive
  function updateCircles() {
    circles.forEach((circle, index) => {
      if (index <= currentActive) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });

    // Enable/disable prev and next buttons based on currentActive
    if (currentActive === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (currentActive === circles.length - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }
});
