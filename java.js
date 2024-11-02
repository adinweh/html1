// Add event listener to portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    // Add animation to image
    const image = item.querySelector('img');
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.3s ease-in-out';
  });

  item.addEventListener('mouseout', () => {
    // Remove animation from image
    const image = item.querySelector('img');
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 0.3s ease-in-out';
  });
});