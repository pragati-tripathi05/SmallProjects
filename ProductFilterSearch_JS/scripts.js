let products = {
  data: [
    {
      productName: "Women BTS Top",
      category: "Topwear",
      price: "349",
      image: "images/top6.png",
    },
    {
      productName: "ResPro Waterproof Jacket",
      category: "Jacket",
      price: "1699",
      image: "images/j1.png",
    },
    {
      productName: "Neo Cargo Pants",
      category: "Bottomwear",
      price: "313",
      image: "images/b7.png",
    },
    {
      productName: "Crafty Men's Jacket",
      category: "Jacket",
      price: "2199",
      image: "images/j2.png",
    },
    {
      productName: "Leather Strap Watch",
      category: "Watch",
      price: "1190",
      image: "images/w1.png",
    },
    {
      productName: "Stressed Jeans",
      category: "Bottomwear",
      price: "313",
      image: "images/b5.png",
    },
    {
      productName: "Casual Solid Black Trouser ",
      category: "Bottomwear",
      price: "313",
      image: "images/b4.png",
    },
    {
      productName: "Black Leather Strap Watch",
      category: "Watch",
      price: "1190",
      image: "images/w2.png",
    },
    {
      productName: "Solid T-shirt",
      category: "Topwear",
      price: "349",
      image: "images/top2.png",
    },
    {
      productName: "Women Casual Dress",
      category: "Topwear",
      price: "1049",
      image: "images/top3.png",
    },
    {
      productName: "Pransh Breathable Jacket",
      category: "Jacket",
      price: "2199",
      image: "images/j3.png",
    },
    {
      productName: "Espr Jacket with Hoodie",
      category: "Jacket",
      price: "2199",
      image: "images/j4.png",
    },
    {
      productName: "Blue Breathable Trouser",
      category: "Bottomwear",
      price: "313",
      image: "images/b1.png",
    },
    {
      productName: "Krihtan Distressed Jeans",
      category: "Bottomwear",
      price: "313",
      image: "images/b6.png",
    },
    {
      productName: "Fancy Lounge Trouser",
      category: "Bottomwear",
      price: "313",
      image: "images/b2.png",
    },
    {
      productName: "Plaine Pants",
      category: "Bottomwear",
      price: "313",
      image: "images/b3.png",
    },
    {
      productName: " Leather Strap Watch",
      category: "Watch",
      price: "1190",
      image: "images/w3.png",
    },
    {
      productName: "Balor Motorcycle Jacket",
      category: "Jacket",
      price: "2199",
      image: "images/j5.png",
    },
    {
      productName: "Solid t-shirt",
      category: "Topwear",
      price: "249",
      image: "images/top4.png",
    },
    {
      productName: "Solid t-shirt",
      category: "Topwear",
      price: "349",
      image: "images/top5.png",
    },
    {
      productName: "Custom Watch",
      category: "Watch",
      price: "1190",
      image: "images/w4.png",
    },
    {
      productName: "Women Solid Polka Dress",
      category: "Topwear",
      price: "949",
      image: "images/top1.png",
    },
    {
      productName: "Women Solid Longline Top",
      category: "Topwear",
      price: "349",
      image: "images/top7.png",
    },
    {
      productName: "Unisex T-shirts",
      category: "Topwear",
      price: "349",
      image: "images/top8.png",
    },
  ],
};

for (let i of products.data) {
  // Creating card
  let card = document.createElement("div");
  // Category in card,image, category is hidden initially
  card.classList.add("card", "i.category", "hide");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  //Container
  let container = document.createElement("div");
  container.classList.add("container");
  // Product name
  let name = document.createElement("h4");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  // Price
  let price = document.createElement("h6");
  price.innerText = "₹" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// Parameter passed from the button(parameter same as category)
function filterProduct(value) {
  // Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //Check if the value equals the innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Initially displaying all the products
window.onload = () => {
  filterProduct("all");
};
