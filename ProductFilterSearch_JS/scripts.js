let products = {
  data: [
    {
      productName: "Women Solid Longline Top",
      category: "Topwear",
      price: "349",
      image: "images/top6.png",
    },
    {
      productName: "",
      category: "Jacket",
      price: "1699",
      image: "images/j1.png",
    },
    {
      productName: "",
      category: "Bottomwear",
      price: "313",
      image: "",
    },
    {
      productName: "",
      category: "Jacket",
      price: "2199",
      image: "images/j2.png",
    },
    {
      productName: "",
      category: "Watch",
      price: "1190",
      image: "images/w1.png",
    },
    {
      productName: "",
      category: "Bottomwear",
      price: "313",
      image: "",
    },
    {
      productName: "",
      category: "Bottomwear",
      price: "313",
      image: "",
    },
    {
      productName: "",
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
      price: "349",
      image: "images/top3.png",
    },
    {
      productName: "",
      category: "Jacket",
      price: "2199",
      image: "images/j3.png",
    },
    {
      productName: "",
      category: "Jacket",
      price: "2199",
      image: "images/j4.png",
    },
    {
      productName: "",
      category: "Bottomwear",
      price: "313",
      image: "",
    },
    {
      productName: "",
      category: "Bottomwear",
      price: "313",
      image: "",
    },
    {
      productName: "",
      category: "Bottomwear",
      price: "313",
      image: "",
    },
    {
      productName: "",
      category: "Bottomwear",
      price: "313",
      image: "",
    },
    {
      productName: "",
      category: "Watch",
      price: "1190",
      image: "images/w3.png",
    },
    {
      productName: "",
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
      productName: "",
      category: "Watch",
      price: "1190",
      image: "images/w4.png",
    },
    {
      productName: "Women Solid Dress",
      category: "Topwear",
      price: "349",
      image: "images/top1.png",
    },
  ],
};

for (let i of products.data) {
  // Creating card
  let card = document.createElement("div");
  // Category in card,image
  card.classList.add("card", "i.category");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  document.getElementById("products").appendChild(card);
}
