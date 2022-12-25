let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".navigation");

// Open sidebar onclick
menuToggle.onclick = function () {
  navigation.classList.toggle("active");
};

// Making clicked item as 'active'
let list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));

  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));
