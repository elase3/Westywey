// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.backgroundColor = "#0092fa47";
  } else {
    document.getElementById("header").style.backgroundColor = "";
  }
}

// for color
// let purches = document.querySelector("#shortcuts").lastElementChild;
// let subscr = document.querySelector(".subscribe");
// console.log(subscr);
let colorPicker = document.getElementById("color");
// let faSolid = document.getElementsByClassName("fa-solid");
// let readmore = document.getElementsByClassName("readmore");

// colorPicker.addEventListener("input", function () {
//   purches.style.backgroundColor = colorPicker.value;
//   subscr.style.backgroundColor = colorPicker.value;
//   for (let i = 0; i < faSolid.length; i++) {
//     faSolid[i].style.color = colorPicker.value;
//   }
// });

// colorPicker.addEventListener("input", function () {

//   for (let i = 0; i < readmore.length; i++) {
//     readmore[i].firstElementChild.style.color = colorPicker.value;
//   }
// });

const root = document.querySelector(":root");

// set css variable
colorPicker.addEventListener("input", function () {
  root.style.setProperty("--primary-color", colorPicker.value);
});
