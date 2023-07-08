const icon = document.querySelector('#harmburger');
const list = document.querySelector('.nav-bottom');
const cancel = document.querySelector('#cancel-btn');

icon.addEventListener('click', () => {
  list.style.display = 'block';
});

cancel.addEventListener('click', () => {
  list.style.display = 'none';
});

const menu = [
  {
    image: 'images/food-1.jpg',
    alt: 'roasted-beef',
    name: 'ROASTED BEEF',
    price: 'very affordale meal, just 3000fcfa',
    description: 'Here is a piece of delicious roasted beef with some spicy ingredients by the corner',
  },
  {
    image: 'images/food-2.jpg',
    alt: 'spicy-cupcake',
    name: 'SPICY CUPCAKE',
    price: 'very affordale meal, just 3500fcfa',
    description: 'Here is a piece of delicious cupcake with some spicy ingredients by the corner',
  },
  {
    image: 'images/food-3.jpg',
    alt: 'spaghetti',
    name: 'SPAGHETTI',
    price: 'very affordale meal, just 5000fcfa',
    description: 'Here is a very delicious plate of spaghetti with a piece of well seasoned chicken',
  },
  {
    image: 'images/food-4.jpg',
    alt: 'French-fries',
    name: 'FRENCH FRIES',
    price: 'very affordale meal, just 4200fcfa',
    description: 'Here we have some french fries and a very delicious stew',
  },
  {
    image: 'images/food-5.jpg',
    alt: 'sandwich',
    name: 'SANDWICH',
    price: 'very affordale meal, just 3700fcfa',
    description: 'Here we have a well seasoned sandwich with neutral bread',
  },
  {
    image: 'images/coffee.jpg',
    alt: 'coffee',
    name: 'COFFEE',
    price: 'very affordale cup of coffee, just 2000fcfa',
    description: 'Here we have a soft cup of brown coffee mixed with some milk',
  },
];

const platesContainer = document.querySelector('.plates');

menu.forEach((item) => {
  const plateHTML = `
      <div class="master-container">
        <img class="image photo" src="${item.image}" alt="${item.alt}">
        <div class="content">
          <h4 class="sub-heading">${item.name}</h4>
          <h5 class="price">${item.price}</h5>
          <hr class="hr">
          <p>${item.description}</p>
        </div>
      </div>
    `;
  platesContainer.innerHTML += plateHTML;
});