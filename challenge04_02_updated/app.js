const imgEl = document.getElementById('photo');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Initialize slideshow
const slideshowOne = slideshow();
imgEl.src = slideshowOne.getCurrentPhoto();

// Event Listeners
nextBtn.addEventListener('click', () => {
  slideshowOne.nextPhoto();
  imgEl.src = slideshowOne.getCurrentPhoto();
});
prevBtn.addEventListener('click', () => {
  slideshowOne.prevPhoto();
  imgEl.src = slideshowOne.getCurrentPhoto();
});