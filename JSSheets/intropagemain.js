var imgCounter = 1;

document.addEventListener('DOMContentLoaded', (event)=> {setInterval(function foo(){
    if (imgCounter == 1){
      setTimeout(function(){console.log("hi!"); document.getElementById("img").src = "Images/Glitched Dino copy.png"; imgCounter=imgCounter+1;}, 3000);
    } else if (imgCounter == 2){
      setTimeout(function(){console.log("hi!"); document.getElementById("img").src = "Images/placeholder-images.png"; imgCounter=imgCounter+1;}, 3000);
    } else if (imgCounter == 3){
      setTimeout(function(){console.log("hi!"); document.getElementById("img").src = "Images/banannanana.png"; imgCounter=1;}, 3000);
    }
  }, 3000);});
