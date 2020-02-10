var imgCounter = 1;

document.addEventListener('DOMContentLoaded', (event)=> {setInterval(function foo(){
    if (imgCounter == 1){
      setTimeout(function(){console.log("hi!"); document.getElementById("img").src = "Images/IntroIMG.png"; imgCounter=imgCounter+1;}, 3000);
    } else if (imgCounter == 2){
      setTimeout(function(){console.log("hi!"); document.getElementById("img").src = "Images/GameIMG.png"; imgCounter=imgCounter+1;}, 3000);
    } else if (imgCounter == 3){
      setTimeout(function(){console.log("hi!"); document.getElementById("img").src = "Images/SolIMG.png"; imgCounter=1;}, 3000);
    }
  }, 3000);});
