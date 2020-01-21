var energy = 0;
var pollutionStart = false;
var pollution = 0;
var pollutionPHS=0.5;
var cp1=false;
var cp2=false;
var cp3=false;

//init
document.getElementById("energyConverted").innerHTML = energy;
document.getElementById("pollutionEarned").innerHTML = pollution;

document.getElementById("hire").onclick = convertEnergyFoo;
document.getElementById("cp1").onclick = lessenEnergy1;
document.getElementById("cp2").onclick = lessenEnergy2;
document.getElementById("cp3").onclick = lessenEnergy3;

//this allows the person to gain energy whenever they click the "hire" button, but when the person reaches 10 energy, pollution starts increasing. Also, when 100 pollution is reached, they lose the game. The game is won when they have 1000 energy.
function convertEnergyFoo() {
  energy = energy+1;
  document.getElementById("energyConverted").innerHTML = energy;
  document.getElementById("hire").style.backgroundColor = "#00FF00";
  setTimeout(function(){document.getElementById("hire").style.backgroundColor = "#00008B";}, 100);
  if (energy == 50) {
    pollutionStart = true;
  }
  var mainGameLoop=setInterval(function foo(){
    if (pollutionStart == true) {
      pollution=pollution+(pollutionPHS);
      document.getElementById("pollutionEarned").innerHTML = pollution;
      if (pollution>=100) {
        alert("You Lose!");
        clearInterval(mainGameLoop);
        energy = 0;
        pollution = 0;
        pollutionStart = false;
        pollutionPHS=0.5;
        document.getElementById("energyConverted").innerHTML = energy;
        document.getElementById("pollutionEarned").innerHTML = pollution;
      }
      if (energy == 1000) {
        alert("You Win!");
        energy = 0;
        pollution = 0;
        pollutionStart = false;
        pollutionPHS=0.5;
        document.getElementById("energyConverted").innerHTML = energy;
        document.getElementById("pollutionEarned").innerHTML = pollution;
      }
    }
  }, 1000);
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
    lessenEnergy3();
  }
}

function lessenEnergy1() {
  if (energy>=1){
    setTimeout(function(){document.getElementById("cp1").style.backgroundColor = "#00008B";}, 100);
    document.getElementById("cp1").style.backgroundColor = "#00FF00";
    pollutionPHS=((pollutionPHS*2)*0.7)/2;
    energy=energy-1;
    document.getElementById("energyConverted").innerHTML = energy;
    document.getElementById("pollutionEarned").innerHTML = pollution;
  } else {
    document.getElementById("cp1").style.backgroundColor = "#FF0000";
    setTimeout(function(){document.getElementById("cp1").style.backgroundColor = "#00008B";}, 100);
  }
}

function lessenEnergy2() {
  if (energy>=10) {
    setTimeout(function(){document.getElementById("cp2").style.backgroundColor = "#00008B";}, 100);
    document.getElementById("cp2").style.backgroundColor = "#00FF00";
    pollutionPHS=((pollutionPHS*2)*0.5)/2;
    energy=energy-10;
    document.getElementById("energyConverted").innerHTML = energy;
    document.getElementById("pollutionEarned").innerHTML = pollution;
  } else {
    document.getElementById("cp2").style.backgroundColor = "#FF0000";
    setTimeout(function(){document.getElementById("cp2").style.backgroundColor = "#00008B";}, 100);
  }
}

function lessenEnergy3() {
  if (energy >= 100){
    setTimeout(function(){document.getElementById("cp3").style.backgroundColor = "#00008B";}, 100);
    document.getElementById("cp3").style.backgroundColor = "#00FF00";
    setTimeout(function foo() {clearInterval(mainGameLoop);}, 10000);
    energy=energy-100;
    document.getElementById("energyConverted").innerHTML = energy;
    document.getElementById("pollutionEarned").innerHTML = pollution;
  } else {
    document.getElementById("cp3").style.backgroundColor = "#FF0000";
    setTimeout(function(){document.getElementById("cp3").style.backgroundColor = "#00008B";}, 100);
  }
}
