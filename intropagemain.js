var imgCounter = 1;

document.addEventListener('DOMContentLoaded', (event)=> {setInterval(function foo(){
    if (imgCounter == 1){
      setTimeout(function(){console.log("hi!"); document.getElementById("img").src = "Glitched Dino copy.png"; imgCounter=imgCounter+1;}, 3000);
    } else if (imgCounter == 2){
      setTimeout(function(){console.log("hi!"); document.getElementById("img").src = "placeholder-images.png"; imgCounter=imgCounter+1;}, 3000);
    } else if (imgCounter == 3){
      setTimeout(function(){console.log("hi!"); document.getElementById("img").src = "banannanana.png"; imgCounter=1;}, 3000);
    }
  }, 3000);});
