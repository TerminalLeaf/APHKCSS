var energy = 0;
var energyPerClick = 1;
var pollutionStart = false;
var pollution = 0;
var roundedOffPollution = Math.round(pollution);
var pollutionPerSec = 0.33333333333333333333333333;
var cp1=false;
var cp2=false;
var cp3=false;
var mainGameLoop;

//init
document.getElementById("energyConverted").innerHTML = energy;
document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;

document.getElementById("hire").onclick = convertEnergyFoo;
document.getElementById("cp1").onclick = lessenEnergy1;
document.getElementById("cp2").onclick = lessenEnergy2;
document.getElementById("cp3").onclick = lessenEnergy3;
document.getElementById("up").onclick = upgrade;
window.onload = startLoop();

function convertEnergyFoo() {
  energy = energy+energyPerClick;
  document.getElementById("energyConverted").innerHTML = energy;
  document.getElementById("hire").style.backgroundColor = "#00FF00";
  setTimeout(function(){document.getElementById("hire").style.backgroundColor = "#00008B";}, 100);
}

function startLoop() {
  //var mainGameLoop=setInterval(foo, 1000, [pollution, pollutionPerSec, pollutionStart]);
  //var mainGameLoop=setInterval(foo.bind(null, [pollution, pollutionPerSec, pollutionStart]), 1000);
  if (energy >= 50) {
    pollutionStart = true;
  }
  mainGameLoop=setInterval(function foo2() {[pollution, pollutionPerSec, pollutionStart, roundedOffPollution, mainGameLoop] =
    foo([pollution, pollutionPerSec, pollutionStart, roundedOffPollution, mainGameLoop]);}, 1000);
}

function foo([pollution, pollutionPerSec, pollutionStart, roundedOffPollution, mainGameLoop]) {
  console.log(pollutionStart);
  if (pollutionStart == true) {
    pollution = pollution + pollutionPerSec;
    console.log("pollution is: " + pollution);

    roundedOffPollution = Math.round(pollution);
    document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;

    //lose
    if (pollution >= 100) {
      alert("You Lose!");
      energy = 0;
      energyPerClick = 1;
      pollutionStart = false;
      pollution = 0;
      roundedOffPollution = Math.round(pollution);
      pollutionPerSec = 0.33333333333333333333333333;
      cp1=false;
      cp2=false;
      cp3=false;
      clearInterval(mainGameLoop);
      document.getElementById("energyConverted").innerHTML = energy;
      document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
    }

    //win
    if (energy >= 1000) {
      document.getElementById("win").style.visibility = "visible";
      document.getElementById("win").onclick = winGame;
    }

    return [pollution, pollutionPerSec, pollutionStart,roundedOffPollution, mainGameLoop]

  }
}


//win
function winGame() {
  alert("You Win!");
  energy = 0;
  energyPerClick = 1;
  pollutionStart = false;
  pollution = 0;
  roundedOffPollution = Math.round(pollution);
  pollutionPerSec = 0.33333333333333333333333333;
  cp1=false;
  cp2=false;
  cp3=false;
  document.getElementById("energyConverted").innerHTML = energy;
  document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
  document.getElementById("win").style.visibility = "hidden";
  clearInterval(mainGameLoop);
}

window.addEventListener('keydown', onKeyDownTwo, true);

function onKeyDownTwo(evt) {
	var x = event.which
	if (x==72) {
    convertEnergyFoo();
  }
  if (x==49) {
    lessenEnergy1();
  }
  if (x==50) {
    lessenEnergy2();
  }
  if (x==51) {
    upgrade();
  }
  if (x==52) {
    lessenEnergy3();
  }
}

function lessenEnergy1() {
  if (energy>=1){
    energy=energy-1;
    document.getElementById("energyConverted").innerHTML = energy;
    setTimeout(function(){document.getElementById("cp1").style.backgroundColor = "#00008B";}, 100);
    document.getElementById("cp1").style.backgroundColor = "#00FF00";
    pollutionPerSec=((pollutionPerSec*2)*0.7)/2;
    document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
  } else {
    document.getElementById("cp1").style.backgroundColor = "#FF0000";
    setTimeout(function(){document.getElementById("cp1").style.backgroundColor = "#00008B";}, 100);
  }
}

function lessenEnergy2() {
  if (energy>=10) {
    energy=energy-10;
    document.getElementById("energyConverted").innerHTML = energy;
    setTimeout(function(){document.getElementById("cp2").style.backgroundColor = "#00008B";}, 100);
    document.getElementById("cp2").style.backgroundColor = "#00FF00";
    pollutionPerSec=((pollutionPerSec*2)*0.5)/2;
    document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
  } else {
    document.getElementById("cp2").style.backgroundColor = "#FF0000";
    setTimeout(function(){document.getElementById("cp2").style.backgroundColor = "#00008B";}, 100);
  }
}

function lessenEnergy3() {
  if (energy >= 100){
    energy=energy-100;
    document.getElementById("energyConverted").innerHTML = energy;
    setTimeout(function(){document.getElementById("cp3").style.backgroundColor = "#00008B";}, 100);
    document.getElementById("cp3").style.backgroundColor = "#00FF00";
    setTimeout(function foo() {pollution = 0; energy = 0;}, 10000);
    pollutionStart=true;
    document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
  } else {
    document.getElementById("cp3").style.backgroundColor = "#FF0000";
    setTimeout(function(){document.getElementById("cp3").style.backgroundColor = "#00008B";}, 100);
  }
}

function upgrade() {
  if (energy>=50){
    energy=energy-50;
    document.getElementById("energyConverted").innerHTML = energy;
    setTimeout(function(){document.getElementById("up").style.backgroundColor = "#00008B";}, 100);
    document.getElementById("up").style.backgroundColor = "#00FF00";
    energyPerClick=energyPerClick+1;
    document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
  } else {
    document.getElementById("up").style.backgroundColor = "#FF0000";
    setTimeout(function(){document.getElementById("up").style.backgroundColor = "#00008B";}, 100);
  }
}
