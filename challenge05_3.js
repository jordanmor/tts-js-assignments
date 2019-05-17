// Exercise 3

const slideshow = {
  photoList: ["photo1.png", "photo2.png", "photo3.png", "photo4.png", "photo5.png", ],
  currentPhotoIndex: 0,
  playInterval: null,
  nextPhoto() {
    if(this.currentPhotoIndex === this.photoList.length - 1) {
      this.pause();
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
  },
  play() {
    this.playInterval = setInterval(() => this.nextPhoto(), 2000);
  },
  pause() {
    clearInterval(this.playInterval);
  }
}

slideshow.play();