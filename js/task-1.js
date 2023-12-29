const categoriesList = document.getElementById('categories');


const categoryItems = categoriesList.querySelectorAll('li.item');


console.log(`Numbers categories: ${categoryItems.length}`);


categoryItems.forEach(categoryItem => {
  
  const categoryTitle = categoryItem.querySelector('h2').textContent;

  
  const categoryElements = categoryItem.querySelectorAll('ul > li');

  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elenents: ${categoryElements.length}`);
  
});