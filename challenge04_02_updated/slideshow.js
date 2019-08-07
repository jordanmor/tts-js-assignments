// Refactor JS exercise from last TTS bootcamp 
//using a closure, short-circuiting and arrow functions
const slideshow = () => {
  const photoList = [
    'https://place-hold.it/300/4287f5/fff/000.jpg?text=Picture%201', 
    'https://place-hold.it/300/4ef542/fff/000.jpg?text=Picture%202', 
    'https://place-hold.it/300/ed9c2b/fff/000.jpg?text=Picture%203', 
    'https://place-hold.it/300/9f18de/fff/000.jpg?text=Picture%204'
  ];
  let currentPhotoIndex = 0;

  return {
    nextPhoto: () => currentPhotoIndex < photoList.length - 1 && currentPhotoIndex++,
    prevPhoto: () => currentPhotoIndex > 0 && currentPhotoIndex--,
    getCurrentPhoto: () => photoList[currentPhotoIndex]
  }
}