// TTS JavaScript Assignment 5 - Slideshow

 const slideshow = {
  photoList: ["photo1.png", "photo2.png", "photo3.png", "photo4.png", "photo5.png", ],
  currentPhotoIndex: 0,
  nextPhoto() {
    if(this.currentPhotoIndex === this.photoList.length - 1) {
      console.log("End of slideshow");
    } else {
     this.currentPhotoIndex++;
     console.log(this.photoList[this.currentPhotoIndex]);
    }
  },
  prevPhoto() {
   if(this.currentPhotoIndex === 0) {
     console.log("There are no previous pictures");
   } else {
     this.currentPhotoIndex--;
     console.log(this.photoList[this.currentPhotoIndex]);
   }
  },
  getCurrentPhoto() {
    return this.photoList[this.currentPhotoIndex];
  }
}

// Run code to test slideshow
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();