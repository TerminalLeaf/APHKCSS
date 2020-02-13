var imgCounter = 1;

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
        imgCounter=1;
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
        imgCounter=2;
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

function linkOnclickIndex() {
  document.getElementById("smallsolIMG").style.top = "0px";
  document.getElementById("smallsolIMG").style.borderTop = "none";
  document.getElementById("smallgmeIMG").style.top = "0px";
  document.getElementById("smallgmeIMG").style.borderTop = "none";
  document.getElementById("smallintIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
  document.getElementById("img").src = "Images/IntroIMG.png";
  document.getElementById("urlForPage").href = "index.html";
  imgCounter = 1;
}

function linkOnclickGame() {
  document.getElementById("smallsolIMG").style.top = "0px";
  document.getElementById("smallsolIMG").style.borderTop = "none";
  document.getElementById("smallintIMG").style.top = "0px";
  document.getElementById("smallintIMG").style.borderTop = "none";
  document.getElementById("smallgmeIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
  document.getElementById("img").src = "Images/GameIMG.png";
  document.getElementById("urlForPage").href = "gamePage.html";
  imgCounter = 2;
}

function linkOnclickSol() {
  document.getElementById("smallgmeIMG").style.top = "0px";
  document.getElementById("smallgmeIMG").style.borderTop = "none";
  document.getElementById("smallintIMG").style.top = "0px";
  document.getElementById("smallintIMG").style.borderTop = "none";
  document.getElementById("smallsolIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
  document.getElementById("img").src = "Images/SolIMG.png";
  document.getElementById("urlForPage").href = "solutionsPage.html";
  imgCounter = 3;
}

window.addEventListener('keydown', onKeyDownTwo, true);

function onKeyDownTwo(evt) {
	var x = event.which
	if (x==39) {
    if (imgCounter == 3){
      document.getElementById("smallsolIMG").style.top = "0px";
      document.getElementById("smallsolIMG").style.borderTop = "none";
      document.getElementById("smallgmeIMG").style.top = "0px";
      document.getElementById("smallgmeIMG").style.borderTop = "none";
      document.getElementById("smallintIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
      document.getElementById("img").src = "Images/IntroIMG.png";
      document.getElementById("urlForPage").href = "index.html";
      imgCounter=1;
      console.log("Intro");
    } else if (imgCounter == 2) {
      document.getElementById("smallgmeIMG").style.top = "0px";
      document.getElementById("smallgmeIMG").style.borderTop = "none";
      document.getElementById("smallintIMG").style.top = "0px";
      document.getElementById("smallintIMG").style.borderTop = "none";
      document.getElementById("smallsolIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
      document.getElementById("img").src = "Images/SolIMG.png";
      document.getElementById("urlForPage").href = "solutionsPage.html";
      imgCounter=3;
      console.log("Sol");
    } else if (imgCounter == 1) {
      document.getElementById("smallsolIMG").style.top = "0px";
      document.getElementById("smallsolIMG").style.borderTop = "none";
      document.getElementById("smallintIMG").style.top = "0px";
      document.getElementById("smallintIMG").style.borderTop = "none";
      document.getElementById("smallgmeIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
      document.getElementById("img").src = "Images/GameIMG.png";
      document.getElementById("urlForPage").href = "gamePage.html";
      imgCounter=2;
      console.log("Game");
    }
  }

  if (x==37) {
    if (imgCounter == 3){
      document.getElementById("smallsolIMG").style.top = "0px";
      document.getElementById("smallsolIMG").style.borderTop = "none";
      document.getElementById("smallintIMG").style.top = "0px";
      document.getElementById("smallintIMG").style.borderTop = "none";
      document.getElementById("smallgmeIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
      document.getElementById("img").src = "Images/GameIMG.png";
      document.getElementById("urlForPage").href = "gamePage.html";
      imgCounter=2;
    } else if (imgCounter == 2) {
      document.getElementById("smallsolIMG").style.top = "0px";
      document.getElementById("smallsolIMG").style.borderTop = "none";
      document.getElementById("smallgmeIMG").style.top = "0px";
      document.getElementById("smallgmeIMG").style.borderTop = "none";
      document.getElementById("smallintIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
      document.getElementById("img").src = "Images/IntroIMG.png";
      document.getElementById("urlForPage").href = "index.html";
      imgCounter=1;
    } else if (imgCounter == 1) {
      document.getElementById("smallgmeIMG").style.top = "0px";
      document.getElementById("smallgmeIMG").style.borderTop = "none";
      document.getElementById("smallintIMG").style.top = "0px";
      document.getElementById("smallintIMG").style.borderTop = "none";
      document.getElementById("smallsolIMG").style = "position: relative;border-top: 5px solid darkred;top: -1px;"
      document.getElementById("img").src = "Images/SolIMG.png";
      document.getElementById("urlForPage").href = "solutionsPage.html";
      imgCounter=3;
    }
  }
}
