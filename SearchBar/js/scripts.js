// Getting all the required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

// If a user presses a key and release
inputBox.onkeyup = (e) => {
  //console.log(e.target.value);

  //Data entered by a user
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      // Here, we filter the array values and user char to lowercase and then return only those words or sentences which start with the char entered by user
      console.log(data);
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      //console.log(data);
      return (data = "<li>" + data + "</li>");
    });
    console.log(emptyArray);
    //     searchWrapper.classList.add("active"); //showing autocomplete box
    //   } else {
    //     searchWrapper.classList.remove("active"); // hiding autocomplete box
  }
  //   showSuggestions(emptyArray);
};

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData; // removing static li tags
}
