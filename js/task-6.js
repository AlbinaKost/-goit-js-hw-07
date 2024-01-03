function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  
  boxesContainer.innerHTML = '';

  for (const i = 0; i < amount; i++) {
      var box = document.createElement('div');
      box.className = 'box';
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = box.style.height = 30 + i * 10 + 'px';

      boxesContainer.appendChild(box);
  }

  document.querySelector('#controls input').value = '';
 }

 function destroyBoxes() {
 const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  }

 document.querySelector('[data-create]').addEventListener('click', function() {
  const inputAmount = document.querySelector('#controls input');
  const amount = parseInt(inputAmount.value);


  if (amount >= 1 && amount <= 100) {
     createBoxes(amount);
  } else {
  alert('Please enter a number between 1 and 100.');
  }
});

 document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);