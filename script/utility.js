function hideElement(element) {
  const hide = document.getElementById(element);
  hide.classList.add("hidden");
}
function showElement(element) {
  const show = document.getElementById(element);
  show.classList.remove("hidden");
}

function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  // random number
  const alphaRandom = Math.random() * 25;
  const alphaNumber = Math.round(alphaRandom);

  const alphabet = alphabets[alphaNumber];
  return alphabet;
}

function setBacgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
