let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let startButton = document.getELementById('start');

const numClosedDoors = 3;

let currentPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}
//isBot();

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

//isClicked();

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoor === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
}


//let head = document.getElementById("header");
//let headContent = document.createElement("img");
//headContent.src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/logo.svg";
//head.appendChild(headContent);


door1.onclick = () => {
  if (currentPlaying && !isClicked(door)) {
  doorImage1.src = openDoor1;
  playDoor(door1);
}
}

door2.onclick = () => {
  if (currentPlaying && !isClicked(door)) {
  doorImage2.src = openDoor2;
  playDoor(door2);
}
}

door3.onclick = () => {
  if (currentPlaying && !isClicked(door)) {
  doorImage3.src = openDoor3;
  playDoor(door3);
}
}

if (!currentPlaying) {
startButton.onclick = () => {
  startRound();
  }
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (str) => {
  if (str === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! play again?';
  }
  currentPlaying = false;
}

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 2) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1){
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}

startRound();