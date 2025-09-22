let counter = document.getElementById("counter");
let button = document.getElementById("incrementBtn");

let value = 0;

button.addEventListener("click", () => {
  alert(value); // un-incremented value
  value++;
  counter.textContent = value;
});
