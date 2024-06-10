function play() {
  //   const homeScreenSection = document.getElementById("home-screen");
  //   homeScreenSection.classList.add("hidden");

  //   const playGroundSection = document.getElementById("play-ground");
  //   playGroundSection.classList.remove("hidden");

  hideElement("home-screen");
  showElement("play-ground");
  continueGame();
}

function continueGame() {
  const alphabets = getRandomAlphabet();
  console.log("random alphabet : ", alphabets);

  const currentAlpha = document.getElementById("current-alpha");
  currentAlpha.innerHTML = alphabets;
  setBacgroundColor(alphabets);
}
