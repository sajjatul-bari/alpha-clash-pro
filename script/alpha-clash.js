function play() {
  hideElement("home-screen");
  hideElement("final-score");
  showElement("play-ground");
  //reset score and life
  setElementById("current-life", 5);
  setElementById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElement("play-ground");
  showElement("final-score");

  // show the gameover result
  const lastScore = getElementById("current-score");
  setElementById("last-score", lastScore);

  //clar all background
  const currentAlpha = getTextElementById("current-alpha");
  removeBacgroundColor(currentAlpha);
}

function continueGame() {
  const alphabets = getRandomAlphabet();
  // console.log("random alphabet : ", alphabets);

  const currentAlpha = document.getElementById("current-alpha");
  currentAlpha.innerHTML = alphabets;
  setBacgroundColor(alphabets);
}
function keyboardButtonPress(event) {
  //player click
  const playerPressed = event.key;

  if (playerPressed === "Escape") {
    gameOver();
  }
  //current alpha
  const currentAlphabet = document.getElementById("current-alpha");
  const alphaNow = currentAlphabet.innerHTML;
  const expectedAlpha = alphaNow.toLowerCase();
  // console.log(expectedAlpha, playerPressed);

  if (expectedAlpha === playerPressed) {
    console.log("you get a point");
    //score
    const currentScore = getElementById("current-score");
    const newscore = currentScore + 1;
    setElementById("current-score", newscore);

    removeBacgroundColor(expectedAlpha);
    continueGame();
  } else {
    console.log("lose your life line");
    const currentScore = getElementById("current-life");
    const newLife = currentScore - 1;
    setElementById("current-life", newLife);

    if (newLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", keyboardButtonPress);
