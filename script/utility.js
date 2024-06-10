function hideElement(element) {
  const hide = document.getElementById(element);
  hide.classList.add("hidden");
}
function showElement(element) {
  const show = document.getElementById(element);
  show.classList.remove("hidden");
}
