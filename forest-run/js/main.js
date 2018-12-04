var dude = document.querySelectorAll("#character-container > div")[0];
var dudeContainer = document.getElementById("character-container");
var bgs = [
  document.getElementById("bg0"),
  document.getElementById("bg1"),
  document.getElementById("bg2"),
  document.getElementById("bg3"),
  document.getElementById("bg4")
];
var stories = document.querySelectorAll("#story h1");
var timeout = null;


document.addEventListener("scroll", function(e){
  dude.classList.remove("stopping");
  dude.classList.add("running");
  bgs.forEach(startAnim);
  if (timeout) clearTimeout(timeout);
  var dist = document.body.scrollTop;
  performFades(dist);
  if (dist < 10 || checkIfEnded()) return;
  timeout = setTimeout(function(){
    dude.classList.remove("running");
    dude.classList.add("stopping");
    bgs.forEach(stopAnim);
  }, 500);
});
window.onload = function(){
  dudeContainer.classList.add("center");

}

function startAnim(e,i){
  e.classList.remove("paused");
  // if (e.classList.contains(`bg${i}Anim`)) return;
  // e.classList.add(`bg${i}Anim-nd`);
}
function stopAnim(e,i){
  //e.classList.remove(`bg${i}Anim`);
  //e.classList.remove(`bg${i}Anim-nd`);
  e.classList.add("paused");
}

function checkIfEnded(){
  var ended = document.body.scrollTop + Math.round(window.innerHeight) > document.body.clientHeight * 0.99;
  if (ended) dudeContainer.classList.add("run-off");
  else dudeContainer.classList.remove("run-off");
  console.log(ended);
  return ended;
}

function performFades(dist){
  Array.prototype.forEach.call(stories, function(story,i){
    var fadein = story.attributes["fade-in-at"].value;
    var fadeout = story.attributes["fade-out-at"].value;
    if (dist >= fadein && dist < fadeout){
      story.classList.remove("fadeOut");
      story.classList.add("fadeIn");
    }
    else if (dist < fadein || dist > fadeout){
      if (story.classList.contains("fadeIn")) story.classList.remove("fadeIn");
      if (!story.classList.contains("fadeOut")) story.classList.add("fadeOut");
    }
  });
}
