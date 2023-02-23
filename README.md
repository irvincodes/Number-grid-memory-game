# The Number Grid Memory Game

As part of my 1st project in General Assembly's Software Enginneering Programme, I chose to create a number grid memory game to demonstrate the skills I have learnt thus far.

Link to the Live URL:
[ The Number Grid Memory Game ](https://irvincodes.github.io/number-grid-memory-game/)

# Technologies Used

I used vanilla Javascript, HTML and CSS as the main technologies.

_Javascript_ - Array Iterations, Loops, Conditionals, Event Listeners, Setting Intervals and Timeouts, DOM Manipulation etc.

_HTML_ - Standard HTML tags such as divs, buttons, Attributes such as classes, ids, number type, min, max etc.

_CSS_ - Grid layout implementation, animate method, dimension control values, properties such as color, background color, margins etc.

# Getting Started - About The Game

It just started from a simple concept that I had, I was looking for something that I could implement and practise the various Javascript, CSS and HTML techniques that I have learnt.

From this:

![Alt text](md-screenshots/Number%20Grid%20Memory%20Game%20Wireframe.png)

To this:

![Alt text](md-screenshots/Number%20Grid%20Memory%20Game%20Done.png)

During implementation, I decided to make the time interval linear to have more consistency in this game version. So instead of the 3s intervals you see in the wireframe, I implemented 2s time intervals for each flash throughout. I also created 2 modes, the original mode being "crazier mode" and the additional one "easier mode".

## Game Flow

1. The player will be greeted with a Welcome Screen with the instructions: "Welcome to the grid.
   The grid will flash numbers 1 to 16 on each square, test your focus and memory by remembering their positions."

2. The player will choose from 2 game modes, "Easier", or "Crazier"!

3. The player will then click the start button and wait for the numbers to flash on each square in the grid.

4. In either mode, the numbers will flash every 2 seconds and the player will have to try to remember the position of each number.

5. Once the player is ready to input his answers, he can click the "Ready to answer!" button which thereafter the grid will transition to a state with input fields in each square.

6. The player will input a number from 1 to 16 into each square and once he is done, he will click the "See my score!" button.

7. The game will match the player's answers to the originally flashed numbers to calculate and show him or her the obtained score. The squares of the correct answers will be highlighted green while incorrect answers will be highlighted red.

8. The player can choose to go again by clicking the "Restart Game" button.

![Alt text](md-screenshots/Number%20Grid%20Memory%20Game%20End%20of%20Game.png)

# Key Functions Used

In this section, I will briefly highlight some key functions I used to make this game work.

The first function that makes a large part of the game tick would be this startNumFlash function below. It mainly incorporated conditions to run either the "easier" or "crazier" game mode, and also had various setIntervals, clearIntervals and setTimeout methods used.

```js
const startNumFlash = () => {
  clickStart();
  let count = 0;
  const intervalInstance = setInterval(() => {
    hideAll();
    if (app.gameMode === "crazy") {
      if (count <= 4) flashTwo();
      else flashThree();
      const haltNumFlash = () => {
        clearInterval(intervalInstance);
      };
      mainButton.addEventListener("click", haltNumFlash);
      if (count === 6) clearInterval(intervalInstance);
    } else if (app.gameMode === "easy") {
      flashTwoInOrder();
      const haltNumFlash = () => {
        clearInterval(intervalInstance);
      };
      mainButton.addEventListener("click", haltNumFlash);
    }
    if (count === 7) clearInterval(intervalInstance);
    count++;
  }, app.timer);
  if (app.gameMode === "crazy") {
    setTimeout(hideAll, app.timer * 8);
  } else if (app.gameMode === "easy") {
    setTimeout(hideAll, app.timer * 9);
  }
};
```

Another 3 main functions used to make the game work would be the ones below.

_flashTwoInOrder()_ - Used to flash 2 random numbers on every 2 consecutive squares in the grid every 2s, for a total of 8 times for the "easier" mode

_flashTwo()_ - Used to flash 2 random numbers on 2 random squares in the grid every 2s, for a total of 5 times for the "crazier" mode

_flashThree()_ - Used to to flash 3 random numbers on 3 random squares in the grid every 2s, for a total of 2 times for the "crazier" mode

```js
const flashTwoInOrder = () => {
  document
    .querySelector('[id="sq-' + (arrIdx + 1) + '"]')
    .firstChild.classList.remove("hide");

  document
    .querySelector('[id="sq-' + (arrIdx + 2) + '"]')
    .firstChild.classList.remove("hide");
  const incrShuffledArrIdx = () => (arrIdx += 2);
  setTimeout(incrShuffledArrIdx, 500);
};

const flashTwo = () => {
  document
    .querySelector('[id="sq-' + shuffledArr[arrIdx] + '"]')
    .firstChild.classList.remove("hide");
  document
    .querySelector('[id="sq-' + shuffledArr[arrIdx + 1] + '"]')
    .firstChild.classList.remove("hide");
  const incrShuffledArrIdx = () => (arrIdx += 2);
  setTimeout(incrShuffledArrIdx, 500);
};

const flashThree = () => {
  document
    .querySelector('[id="sq-' + shuffledArr[arrIdx] + '"]')
    .firstChild.classList.remove("hide");
  document
    .querySelector('[id="sq-' + shuffledArr[arrIdx + 1] + '"]')
    .firstChild.classList.remove("hide");
  document
    .querySelector('[id="sq-' + shuffledArr[arrIdx + 2] + '"]')
    .firstChild.classList.remove("hide");
  const incrShuffledArrIdx = () => (arrIdx += 3);
  setTimeout(incrShuffledArrIdx, 500);
};
```

# Future Modifications

- Player Name Input Field
- Leaderboard
- Audio option
- Making the code more concise where possible
- Refactoring the code in the background to make it easy to change the grid size without making much changes to the rest of the code with a few simple variable changes
