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
function getTextElementById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerHTML;
  return elementText;
}

function getElementById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerHTML;
  const value = parseInt(elementText);
  return value;
}
function setElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerHTML = value;
}

function setBacgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBacgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
