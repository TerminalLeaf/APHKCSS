var energy = 0;
var energyPerClick = 1;
var pollutionStart = false;
var pollution = 0;
var roundedOffPollution = Math.round(pollution);
var pollutionPerSec = 1;
var cp1=false;
var cp2=false;
var cp3=false;
var mainGameLoop;
var cp1bought = 0;
var cp2bought = 0;
var cp3bought = 0;
var upbought = 0;

//init
document.getElementById("energyConverted").innerHTML = energy;
document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
document.getElementById("upNum").innerHTML = upbought;
document.getElementById("aFNum").innerHTML = cp2bought;
document.getElementById("campaignsNum").innerHTML = cp1bought;

//onclicks: so basically whenever a button is clicked, these functions are called. The buttons are identified by their ID's.
document.getElementById("hire").onclick = convertEnergyFoo;
document.getElementById("cp1").onclick = lessenEnergy1;
document.getElementById("cp2").onclick = lessenEnergy2;
document.getElementById("cp3").onclick = lessenEnergy3;
document.getElementById("up").onclick = upgrade;
document.getElementById("helpMeOut").onclick = helpLol;

//window.onload: basically, when the website loads in on the page, the function: startLoop() is started.
window.onload = startLoop();

//everytime the "hire" button is clicked, this function allows the energy to increase by the energyPerClick, which can be changed by upgrading
function convertEnergyFoo() {
  energy = energy+energyPerClick;
  document.getElementById("energyConverted").innerHTML = energy;
  document.getElementById("hire").style.backgroundColor = "#00FF00";
  setTimeout(function(){document.getElementById("hire").style.backgroundColor = "#00008B";}, 100);
  if (energy >= 50) {
    pollutionStart = true;
  }
}

//basically, this function allows for the loop to start/continue. Everytime the loop starts/finsihes, the array is given to the function, so that the values in the function can be reused by the function.
function startLoop() {

  mainGameLoop=setInterval(function foo2() {
    [pollution, pollutionPerSec, pollutionStart, roundedOffPollution] =
    foo([pollution, pollutionPerSec, pollutionStart, roundedOffPollution]);
  }, 1000);

}

//this function is called upon by the loop above. This tests if the energy level is 50 or above, if so, then the pollution starts increasing. If the pollution is 100, then the player loses. If the energy level is above or equal to 10000, then the player wins
function foo([pollution, pollutionPerSec, pollutionStart, roundedOffPollution]) {

  if (pollutionStart == true) {
    pollution = pollution + pollutionPerSec;

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
      pollutionPerSec = 1;
      cp1=false;
      cp2=false;
      cp3=false;
      cp1bought = 0;
      cp2bought = 0;
      cp3bought = 0;
      upbought = 0;
      document.getElementById("energyConverted").innerHTML = energy;
      document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
      document.getElementById("upNum").innerHTML = upbought;
      document.getElementById("aFNum").innerHTML = cp2bought;
      document.getElementById("campaignsNum").innerHTML = cp1bought;
    }

    //win
    if (energy >= 10000) {
      document.getElementById("win").style.visibility = "visible";
      document.getElementById("win").onclick = winGame;
    }
  }
  return [pollution, pollutionPerSec, pollutionStart,roundedOffPollution];
}


//win
function winGame() {
  alert("You Win!");
  energy = 0;
  energyPerClick = 1;
  pollutionStart = false;
  pollution = 0;
  roundedOffPollution = Math.round(pollution);
  pollutionPerSec = 1;
  cp1=false;
  cp2=false;
  cp3=false;
  cp1bought = 0;
  cp2bought = 0;
  cp3bought = 0;
  upbought = 0;
  document.getElementById("energyConverted").innerHTML = energy;
  document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
  document.getElementById("upNum").innerHTML = upbought;
  document.getElementById("aFNum").innerHTML = cp2bought;
  document.getElementById("campaignsNum").innerHTML = cp1bought;
  document.getElementById("win").style.visibility = "hidden";
}

//this allows for keybinds
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

//this is upgrade 1, which reduces the pollution per sec by 30%
function lessenEnergy1() {
  if (energy>=1){
    energy=energy-1;
    document.getElementById("energyConverted").innerHTML = energy;
    setTimeout(function(){document.getElementById("cp1").style.backgroundColor = "#00008B";}, 100);
    document.getElementById("cp1").style.backgroundColor = "#00FF00";
    pollutionPerSec=pollutionPerSec*0.7;
    document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
    cp1bought=cp1bought+1;
    document.getElementById("campaignsNum").innerHTML = cp1bought;
  } else {
    document.getElementById("cp1").style.backgroundColor = "#FF0000";
    setTimeout(function(){document.getElementById("cp1").style.backgroundColor = "#00008B";}, 100);
  }
}

//this is upgrade 2, which reduces the pollution per sec by 50%
function lessenEnergy2() {
  if (energy>=10) {
    energy=energy-10;
    document.getElementById("energyConverted").innerHTML = energy;
    setTimeout(function(){document.getElementById("cp2").style.backgroundColor = "#00008B";}, 100);
    document.getElementById("cp2").style.backgroundColor = "#00FF00";
    pollutionPerSec=((pollutionPerSec*2)*0.5)/2;
    document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
    cp2bought=cp2bought+1;
    document.getElementById("aFNum").innerHTML = cp2bought;
  } else {
    document.getElementById("cp2").style.backgroundColor = "#FF0000";
    setTimeout(function(){document.getElementById("cp2").style.backgroundColor = "#00008B";}, 100);
  }
}

//this is upgrade 3, which takes away all the pollution, stops it for increasing, while minusing the energy by 50 after 10 seconds
function lessenEnergy3() {
  if (energy >= 100){
    energy=energy-100;
    document.getElementById("energyConverted").innerHTML = energy;
    pollutionStart=false;
    setTimeout(function(){document.getElementById("cp3").style.backgroundColor = "#00008B";}, 100);
    document.getElementById("cp3").style.backgroundColor = "#00FF00";
    setTimeout(function foo() {pollution = 0; energy = energy-50; pollutionStart=true;}, 10000);
    document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
  } else {
    document.getElementById("cp3").style.backgroundColor = "#FF0000";
    setTimeout(function(){document.getElementById("cp3").style.backgroundColor = "#00008B";}, 100);
  }
}

//this is the hire upgrade, which adds to the energyPerClick by 1
function upgrade() {
  if (energy>=50){
    energy=energy-50;
    document.getElementById("energyConverted").innerHTML = energy;
    setTimeout(function(){document.getElementById("up").style.backgroundColor = "#00008B";}, 100);
    document.getElementById("up").style.backgroundColor = "#00FF00";
    energyPerClick=energyPerClick+1;
    document.getElementById("pollutionEarned").innerHTML = roundedOffPollution;
    upbought=upbought+1;
    document.getElementById("upNum").innerHTML = upbought;
  } else {
    document.getElementById("up").style.backgroundColor = "#FF0000";
    setTimeout(function(){document.getElementById("up").style.backgroundColor = "#00008B";}, 100);
  }
}

//lol a help function just in case you get confused
function helpLol() {
  setTimeout(function(){document.getElementById("helpMeOut").style.backgroundColor = "#00008B";}, 100);
  document.getElementById("helpMeOut").style.backgroundColor = "#00FF00";
  setTimeout(function(){alert("First, the aim of the game is to get 10,000 energy so that we, the player, have enough energy to power our rocket ship to migrate to a new planet. In order to earn energy, we need to hire non-renewable energy factories to convert these non-renewable energy sources into energy! Try clicking it a few times. Go ahead. I'll wait...");}, 5000);
  setTimeout(function(){alert("I'm too impatient to wait any further. Done? OK, Good. So now, there is a lose condition. When you reach 50 energy, the pollution levels will start rising. Once the number below the energy reaches 100, then we, as the player, lose! Anyways, to reduce this rise, we need to press the 'Buy Campaigns For Air Pollution' button, the 'Buy Air Filters' button, and the 'Replace Non-Renewable Energy Sources with Renewable Energy Sources' button. Be careful though, as these cost energy. Good Luck! Oh, wait a few seconds for two more tips!");}, 5000);
  setTimeout(function(){alert("You see that 'Upgrade Factories' button? Yeah, it costs 50 energy, but if you buy it, then it will increase your 'Energy Per Click', which is how much energy you get every time you press the first button, 'Buy Renewable Energy Factories to Convert Energy'. What this does is that it increases your energy per click by 1. Once you have many of these upgrades, let's say about 49, then you can gain 50 energy per click! I mean, how cool is that! Last tip. You see the H, 1, 2, 3, 4 buttons on your keyboard? Not the numpad ones, just on the general keyboard. Yeah. These are hotkeys for, you guessed it, Hire, Buy Campaigns, Buy Air Filters, Upgrade Factories, and Replacing Non-renewable Energy Sources! Anyways, good luck, and don't fail us! The fate of the world is in your hands.")}, 5000);
}
