const screen = document.querySelector(".screen");

const getValue = (value) => screen.value += value;

const clearScreen = () => screen.value = "";

const calcResult = () => {
  const result = eval(screen.value);
  screen.value = result;
}