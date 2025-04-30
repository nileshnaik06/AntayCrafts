let productArr = [
  {productName: "Whispers of Handmade Wonder",price: 25.99,image: "Assets\\11.jpg"},
  {productName: "Crafted Dreams: DIY Collection",price: 32.50,image: "Assets\\12.jpg"},
  {productName: "Soulful Creations: Made with Heart",price: 29.75,image: "Assets\\13.jpg"},
  {productName: "The Artisan's Touch: A beautiful decor",price: 27.40,image: "Assets\\14.jpg"},
  {productName: "Rustic Charm: DIY Edition",price: 22.00,image: "Assets\\15.jpg"},
  {productName: "Threads of Imagination",price: 24.60,image: "Assets\\18.jpg"},
  {productName: "Bloom & Craft: Handmade Delights",price: 26.80,image: "Assets\\19.jpg"},
  {productName: "Whimsy in Every Stitch",price: 21.90,image: "Assets\\20.jpg"},
]

function renderProducts() {
  const cardsContainer = document.querySelector('#cards');
  let cardsHTML = '';
  
  productArr.forEach((prod) => {
      cardsHTML += `
          <div class="card">
              <img src="${prod.image}" alt="${prod.productName}">
              <div class="low">
                  <h2>${prod.productName}</h2>
                  <h3>$${prod.price.toFixed(2)}</h3>
                  <button class="viewBtn">View</button>
              </div>
          </div>
      `;
  });
  
  cardsContainer.innerHTML = cardsHTML;
}


const openMenu = document.querySelector("#menu-open");
const closeMenu = document.querySelector("#menu-close");
const menu = document.querySelector("#menu");
const shopBtn = document.querySelector("#btn");


window.addEventListener("load", () => {
  if (window.location.hash) {
      history.replaceState(null, null, " ");
      window.scrollTo(0, 0);
  }
  renderProducts(); 
});


window.addEventListener('resize', () => {
  const navMenu = document.querySelector('.nav-menu');
  if (window.innerWidth > 1024) {
    menu.classList.remove('active'); // or whatever class shows the menu
  }
});


openMenu.addEventListener('click', () => {
  menu.classList.add('active');
});


closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});


shopBtn.addEventListener('click', () => {
  window.location.href = '#products';
});