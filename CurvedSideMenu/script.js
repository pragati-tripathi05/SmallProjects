let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".navigation");

// Open sidebar onclick
menuToggle.onclick = function () {
  navigation.classList.toggle("active");
};
