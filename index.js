for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var but = this.innerHTML;
    makeSound(but);
    press(but);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  press(event.key);
});

function press(btt) {
  var activeBut = document.querySelector("." + btt);
  activeBut.classList.add("pressed");
  setTimeout(function () {
    activeBut.classList.remove("pressed");
  }, 300);
}

function makeSound(but) {
  switch (but) {
    case "w":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "a":
      var sound2 = new Audio("sounds/kick-bass.mp3");
      sound2.play();
      break;
    case "s":
      var sound3 = new Audio("sounds/snare.mp3");
      sound3.play();
      break;
    case "d":
      var sound4 = new Audio("sounds/tom-1.mp3");
      sound4.play();
    case "j":
      var sound5 = new Audio("sounds/tom-2.mp3");
      sound5.play();
    case "k":
      var sound6 = new Audio("sounds/tom-3.mp3");
      sound6.play();
    case "l":
      var sound7 = new Audio("sounds/tom-4.mp3");
      sound7.play();
  }
}
