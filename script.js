const character = document.getElementById("character");
const block = document.getElementById("block");
const counter = document.getElementById("press_to_jump");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

const checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("u loose!");
  }
}, 10);

let count = 0;
button.onclick = function () {
  count += 1;
  button.innerHTML = "PRESS TO JUMP, score: " + count;
};
