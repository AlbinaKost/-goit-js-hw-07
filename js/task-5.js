function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 }
    const changeColorButton = document.querySelector('button.change-color');
    const bodyElement = document.body;
    const colorSpan = document.querySelector('span.color');
 
    changeColorButton.addEventListener('click', function () {
        
        const newColor = getRandomHexColor();

        bodyElement.style.backgroundColor = newColor;
        colorSpan.textContent = newColor;
         
        });
        
    
     
    