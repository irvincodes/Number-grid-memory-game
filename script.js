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
  timer: 2000,
};

let shuffledArr = app.numArr.sort(() => Math.random() - 0.5);
console.log("shuffledArr", shuffledArr);

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
const mainDivArr = Array.from(document.getElementsByClassName("main-div"));
// const getMainDivArr = () => {
//   for (i = 1; i <= app.numArr.length; i++) {
//     let divSq = document.getElementById(`sq-${i}`);
//     mainDivArr.push(divSq);
//   }
// };
console.log("mainDivArr: ", mainDivArr);

const mainButton = document.getElementById("button");
const grid = document.getElementById("grid");
const squares = document.getElementsByClassName("square");
let squaresArr = Array.from(document.getElementsByClassName("square"));
console.log("squaresArr", squaresArr);
console.log("squares", squares);

/*----- event listeners -----*/ // -> Any functions that invokes an event listener action to happen e.g function clickStartButton() {game.screen = "game"; renderAll(); }

let shuffledArrIdx = 0;
const gridElement = document.getElementById("grid");
const flashTwo = () => {
  console.log("shuffledArrIdx:", shuffledArrIdx);
  console.log("shuffledArr:", shuffledArr);
  console.log("shuffledArr[shuffledArr]", shuffledArr[shuffledArrIdx]);
  console.log("shuffledArr[shuffledArr]+1", shuffledArr[shuffledArrIdx + 1]);
  console.log(
    "check for hide class",
    document
      .querySelector("#sq-" + shuffledArr[shuffledArrIdx])
      .classList.contains("hide"),
    document
      .querySelector("#sq-" + shuffledArr[shuffledArrIdx + 1])
      .classList.contains("hide")
  );
  document
    .querySelector('[id="sq-' + shuffledArr[shuffledArrIdx] + '"]')
    .firstChild.classList.remove("hide");
  document
    .querySelector('[id="sq-' + shuffledArr[shuffledArrIdx + 1] + '"]')
    .firstChild.classList.remove("hide");
  // squares.item(shuffledArr[shuffledArrIdx]).classList.remove("hide");
  // squares.item(shuffledArr[shuffledArrIdx + 1]).classList.remove("hide");
  const incrShuffledArrIdx = () => (shuffledArrIdx += 2);
  setTimeout(incrShuffledArrIdx, 500);
};

// flashTwo();

const flashThree = () => {
  console.log("flashThree() fired");
  document
    .querySelector('[id="sq-' + shuffledArr[shuffledArrIdx] + '"]')
    .firstChild.classList.remove("hide");
  document
    .querySelector('[id="sq-' + shuffledArr[shuffledArrIdx + 1] + '"]')
    .firstChild.classList.remove("hide");
  document
    .querySelector('[id="sq-' + shuffledArr[shuffledArrIdx + 2] + '"]')
    .firstChild.classList.remove("hide");
  const incrShuffledArrIdx = () => (shuffledArrIdx += 3);
  setTimeout(incrShuffledArrIdx, 500);
};

const startNumFlash = () => {
  clickStart();
  let count = 0;
  const intervalInstance = setInterval(() => {
    console.log("count", count);
    hideAll();
    console.log("hideAll() fired");
    if (count <= 4) flashTwo();
    else flashThree();

    if (count === 6) clearInterval(intervalInstance);
    count++;
  }, app.timer);
  setTimeout(hideAll, app.timer * 8);
};

const hideAll = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("hide");
  }
};

const clickStart = () => {
  app.screen = "numFlash";
  mainButton.textContent = "Ready to answer!";
  mainButton.removeEventListener("click", startNumFlash);
  mainButton.addEventListener("click", playerAns);

  renderAll();
};

const showInputFields = () => {
  console.log("before remove squares: ", grid);
  while (squares.length > 0) {
    squares[0].parentNode.removeChild(squares[0]);
  }
  console.log("removed squares: ", grid);
  mainDivArr.forEach((d) => {
    const createInput = document.createElement("input");
    // const inputFieldAttributes = {
    //   type: "number",
    //   max: "16",
    //   min: "0",
    // };
    // // const setInputFieldAttributes = (elem, elemAttributes) => {
    // //   Object.keys(inputFieldAttributes).forEach((attribute) => {
    // //     elem.setAttribute(attribute, elemAttributes[attribute]);
    // //   });
    // //   setInputFieldAttributes(createInput, inputFieldAttributes);
    // //   console.log("inputField setAttribute: ", createInput);
    // // };

    createInput.setAttribute("type", "number");
    createInput.setAttribute("max", "16");
    createInput.setAttribute("min", "0");

    d.appendChild(createInput);
    console.log("added input fields: ", d);
  });
  // const createInput = document.createElement("input");
  // createInput.setAttribute("type", "value");
  // console.log("input: ", createInput);
  // // while (i < squares.length) {
  // //   grid.appendChild(createInput);
  // //   i++;
  // // }
  // mainDivArr.forEach((d) => d.appendChild(createInput));
  // console.log("added input fields: ", mainDivArr);
  for (i = 1; i <= app.numArr; i++) {
    const inputList = document.getElementsByTagName("input");
    console.log("inputList: ", inputList);
    inputList.forEach.setAttribute("id", `input-${i}`);
  }
  console.log("added id to all inputs: ", mainDivArr);
};

const playerAns = () => {
  app.screen = "playerAns";
  mainButton.textContent = "See my score!";
  showInputFields();
  console.log("showInputFields() fired");
  mainButton.removeEventListener("click", playerAns);
  mainButton.addEventListener("click", clickCalcScore);
  renderAll();
};

const calcScore = () => {
  mainDivArr.forEach((d) => {
    const playerInput = d.firstChild.value;
    console.log("input: ", playerInput);
    app.playerInput.push(playerInput);
  });
  console.log("playerInputs: ", app.playerInput);
  for (i = 0; i < shuffledArr.length; i++) {
    if (app.playerInput[i] == shuffledArr[i]) {
      if (app.playerInput[i] <= 16 && app.playerInput[i] >= 0) {
        app.playerScore += 1;
      }
      // else {
      //   alert("Kindly input only numbers from 1 to 16! Try again.");
      //   // app.playerInput = [];
      //   mainButton.addEventListener("click", clickCalcScore);
      //   mainButton.textContent = "Re-try";
      //   break;
      // }
    }
  }
  console.log("Player score: ", app.playerScore);
  const scoreMsg = (document.getElementById("showScore").textContent =
    "YOUR SCORE: " + app.playerScore);
  document.getElementById("showScore").style.marginBottom = "10vm";
  return scoreMsg;
};

const clickCalcScore = () => {
  app.screen = "showScore";
  mainButton.textContent = "Restart Game";
  calcScore();
  mainButton.removeEventListener("click", clickCalcScore);
  mainButton.addEventListener("click", restartGame);
  renderAll();
};

const restartGame = () => {
  app.screen = "welcome";
  mainButton.textContent = "START";
  const inputArr = document.getElementsByTagName("input");

  while (inputArr.length > 0) {
    inputArr[0].parentNode.removeChild(inputArr[0]);
  }
  mainDivArr.forEach((d) => {
    console.log("create P");
    const createP = document.createElement("p");
    createP.classList.add("square");
    console.log("add square class: ", createP);
    d.appendChild(createP);
  });
  squaresArr = Array.from(document.getElementsByClassName("square"));
  shuffledArr = app.numArr.sort(() => Math.random() - 0.5);
  shuffledArrIdx = 0;
  mainButton.removeEventListener("click", restartGame);

  main();
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
  console.log(currScreen);
  currScreen.classList.remove("hide");
};

const fillSquare = () => {
  for (i = 0; i < squaresArr.length && i < shuffledArr.length; i++) {
    console.log(
      "fillSquare loop",
      squaresArr[i].textContent,
      "seperator",
      shuffledArr[i]
    );
    squaresArr[i].textContent = shuffledArr[i];
    console.log(
      "fillSquare loop done",
      squaresArr[i].textContent,
      shuffledArr[i]
    );
  }
  squaresArr.forEach((sq) => sq.classList.add("hide"));
};

// const hideInputFields = () => {
//   for (i = 1; i <= squares.length; i++) {
//     document.querySelector(`#input-${i}`).classList.add("hide");
//   }
// };

const main = () => {
  fillSquare();
  // hideInputFields();
  mainButton.addEventListener("click", startNumFlash);
  renderAll();
};

main();
