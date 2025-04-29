let productArr = [
  {
    productName: "Whispers of Handmade Wonder",
    price: 25.99,
    image: "Assets\\11.jpg"
  },
  {
    productName: "Crafted Dreams: DIY Collection",
    price: 32.50,
    image: "Assets\\12.jpg"

  },
  {
    productName: "Soulful Creations: Made with Heart",
    price: 29.75,
    image: "Assets\\13.jpg"
  },
  {
    productName: "The Artisan's Touch: A beautiful decor",
    price: 27.40,
    image: "Assets\\14.jpg"
  },
  {
    productName: "Rustic Charm: DIY Edition",
    price: 22.00,
    image: "Assets\\15.jpg"
  },
  {
    productName: "Threads of Imagination",
    price: 24.60,
    image: "Assets\\18.jpg"
  },
  {
    productName: "Bloom & Craft: Handmade Delights",
    price: 26.80,
    image: "Assets\\19.jpg"
  },
  {
    productName: "Whimsy in Every Stitch",
    price: 21.90,
    image: "Assets\\20.jpg"
  },
]

window.addEventListener("load", function () {
  if (window.location.hash) {
    history.replaceState(null, null, " ");
    window.scrollTo(0, 0);
  }
});
function prods() {
  let clutt = ' ';
  productArr.forEach((prod) => {
    document.querySelector('#cards').innerHTML = clutt += ` <div class="card">
                    <img src="${prod.image}" alt="">
                    <div class="low">
                        <h2>${prod.productName}</h2>
                        <h3>$${prod.price}</h3>
                        <button class="viewBtn">View</button>
                    </div>
                </div>`
  });
}

let openMenu = document.querySelector("#menu-open");
let closeMenu = document.querySelector("#menu-close");
let menu = document.querySelector("#menu");
let shop = document.querySelector("#btn");


openMenu.addEventListener('click', function () {
  openMenu.style.display = 'none';
  menu.classList.add('active');
});

closeMenu.addEventListener('click', function () {
  menu.classList.remove('active');
  openMenu.style.display = 'block';
});

openMenu.addEventListener('click', function () {
  openMenu.style.display = 'none';
  menu.classList.add('active');
});

closeMenu.addEventListener('click', function () {
  menu.classList.remove('active');
  openMenu.style.display = 'block';
});

// if (window.innerWidth < '768') {
//   openMenu.style.display = 'block';
// } else   openMenu.style.display = 'none';

if (window.innerWidth< 768) {
  openMenu.addEventListener('click', function () {
    openMenu.style.display = 'none';
    menu.classList.add('active');
  });
  
  closeMenu.addEventListener('click', function () {
    menu.classList.remove('active');
    openMenu.style.display = 'block';
  });
}else  openMenu.style.display = 'none';

shop.addEventListener('click', function () {
  window.location.href = '#products'
})
prods();
