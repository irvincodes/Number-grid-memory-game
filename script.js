/* USER STORY 
1. As a player, I want to have a set of instructions telling me how the game works
2. As a developer, I will explain that the game is a 4x4 grid of numbers with numbers that will flash every few seconds until 
all 16 numbers have been shown. After that, am empty grid with 4x4 input fields will be shown and the player will click 
into each square and enter their answers. Lastly, the game will calculate player score. 
3. As a player, I want to have a game start button to click to start the game
4. As a developer, I want to show a progress bar displaying how many numbers have been displayed. 
5. As a developer, I want to have 4 main phases of the game: welcome, numberFlash, playerAnswer, showScore
6. As a player, during each phase of the game, I want to be clear what I am supposed to do by seeing some text. 
7. As a player, after my score is calculated, I want to be able to restart the game internally with a Restart Game button

/* PSEUDOCODE
1. create an object called app which contains data such as an "array of numbers (1 to 16)", "SCREEN_STATE (welcome/numFlash/playerAns/showScore)"
const app {
  numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  playerInput = []
  playerScore = 0
  screen = "welcome"
  timer = 2
}

2. create a renderScreen function to switch screen from "welcome" to "numFlash" after player clicks "start game" button, "numFlash" to "playerAns"
after the 16 numbers have finished flashing on screen (timeinterval 15s?), and from "playerAns" to "showScore" after player clicks "Show me my score!" button
3. for renderScreen function, add a "hide" class to each screen()
4. remove "hide" class from current app.SCREEN_STATE
5. clear all text content from each "square"
6. When player clicks "START" button, it will run the flashStart function.
7. The flashStart function will execute and show on the grid squares 2 random numbers every 2 seconds, do that a total of 4 times before showing 4 random numbers after 3 seconds for a total of 2 times until all 16 numbers in the app.numArr have been shown. Each number will only be flashed once in a unique square position.
7.1. the numbers that flashed randomly have been randomly picked from the numArr and adds the text inside each div(#sq-${idx})
7.2. at the same time, the function will also add Attribute to each div with the value of the number that was flashed on each square
8. After that the numFlash screen will change to the playerAns screen whereby now each square on the grid will have an input where the player will
click into and enter the number.
9. After the player submits the answer in each input field in every square, the player will click the "Calculate Score" button to submit.
9.1. The player can only enter a number which is within 1 to 16, any other input will throw up an error message.
9.2. After the player clicks "Calculate Score" button, his inputs will be fed into the app.playerInput array [5, 2, 11, ...]
10. The playerAns app.Screen will change to showScore after player clicks "Calculate Score" without any errors.
11. Clicking the "Calculate Score" button will run the function "calcScore" which will tally the app.playerInput with the value in each div's Attribute
12. If app.playerInput[0] == document.getElementbyAttribute[0].getAttribute, playerScore += 1
13. Extra Levels?


/*----- constants -----*/ // -> any direct constants e.g BOARD_COLUMNS = 7

/*----- state variables -----*/ // -> Model, where your main "game" or "app" object which stores data go
const app = {
  numArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  playerInput: [],
  playerScore: 0,
  screen: "welcome",
  timer: 2,
};

/*----- cached elements  -----*/ // -> Any cached elements e.g const welcomeScreen = document.querySelector("#welcome");
const welcomeScreen = document.getElementById("welcome");
const numFlashScreen = document.getElementById("numFlash");
const playerAnsScreen = document.getElementById("playerAns");
const showScoreScreen = document.getElementById("showScore");
const screens = [
  welcomeScreen,
  numFlashScreen,
  playerAnsScreen,
  showScoreScreen,
];
const mainButton = document.getElementById("button");
const grid = document.getElementById("grid");
const squares = Array.from(document.getElementsByClassName("square"));
console.log(squares);

/*----- event listeners -----*/ // -> Any functions that invokes an event listener action to happen e.g function clickStartButton() {game.screen = "game"; renderAll(); }

const fillSquare = () => {
  const shuffledArr = app.numArr.sort(() => Math.random() - 0.5);
  console.log(shuffledArr);
  for (i = 0; i < squares.length && i < shuffledArr.length; i++) {
    squares[i].textContent = shuffledArr[i];
  }
  squares.forEach((sq) => sq.classList.add("hide"));
};

fillSquare();

//   const random = Math.floor(Math.floor(Math.random() * numArr.length);)

//   // app.numArr.forEach((val) => {
//   //   const gridSq = grid.getElementbyId(`sq-${val}`);
//     // const randomIndex = Math.floor(Math.random() * numArr.length);
//     // gridSq.innerText = numArr.splice(randomIndex, randomIndex);
//   //   console.log(gridSq);
//   // });
// fillSquare();

// const hideSquare = squares.forEach((sq) => {
//   sq.classList.add("hide");
// });

// hideSquare();

// // const startNumFlash =

const clickStart = () => {
  mainButton.addEventListener("click", startNumFlash());
  app.screen = "numFlash";
  renderAll();
};

/*----- functions -----*/ // -> All other functions e.g renderScreen(), renderAll(), main()
const renderAll = () => {
  renderScreen();
};

const renderScreen = () => {
  screens.forEach((s) => {
    s.classList.add("hide");
  });
  const currScreen = document.querySelector("#" + app.screen);
  currScreen.classList.remove("hide");
};
renderAll();