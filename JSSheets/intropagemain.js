var imgCounter = 2;

document.addEventListener('DOMContentLoaded', (event)=> {setInterval(function foo(){
    if (imgCounter == 1){
      setTimeout(function foo(){
        document.getElementById("smallsolIMG").style.top = "0px";
        document.getElementById("smallsolIMG").style.borderTop = "none";
        document.getElementById("smallgmeIMG").style.top = "0px";
        document.getElementById("smallgmeIMG").style.borderTop = "none";
        document.getElementById("smallintIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
        document.getElementById("img").src = "Images/IntroIMG.png";
        document.getElementById("urlForPage").href = "index.html";
        imgCounter=imgCounter+1;
      }, 3000);
    } else if (imgCounter == 2){
      setTimeout(function foo(){
        document.getElementById("smallsolIMG").style.top = "0px";
        document.getElementById("smallsolIMG").style.borderTop = "none";
        document.getElementById("smallintIMG").style.top = "0px";
        document.getElementById("smallintIMG").style.borderTop = "none";
        document.getElementById("smallgmeIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
        document.getElementById("img").src = "Images/GameIMG.png";
        document.getElementById("urlForPage").href = "gamePage.html";
        imgCounter=imgCounter+1;
      }, 3000);
    } else if (imgCounter == 3){
      setTimeout(function foo(){
        document.getElementById("smallgmeIMG").style.top = "0px";
        document.getElementById("smallgmeIMG").style.borderTop = "none";
        document.getElementById("smallintIMG").style.top = "0px";
        document.getElementById("smallintIMG").style.borderTop = "none";
        document.getElementById("smallsolIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
        document.getElementById("img").src = "Images/SolIMG.png";
        document.getElementById("urlForPage").href = "solutionsPage.html";
        imgCounter=1;
      }, 3000);
    }
  }, 3000);});


/*position: relative;
border-top: 5px solid darkred;
top: -1px;*/
