function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  let size = 30;

  for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);

      size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
  const createButton = document.getElementById('createButton');
  const destroyButton = document.getElementById('destroyButton');
  const inputCount = document.getElementById('inputCount');

  createButton.addEventListener('click', function () {
      const amount = parseInt(inputCount.value, 10);

      if (amount >= 1 && amount <= 100) {
          createBoxes(amount);
          inputCount.value = '';
      }
  });

  destroyButton.addEventListener('click', function () {
      destroyBoxes();
  });
});