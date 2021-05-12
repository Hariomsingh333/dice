console.log("hello world");

let num1 = Math.random();
num1 = num1*6;
num1 = Math.floor(num1) +1; // 1 - 6

let num2 = Math.random();
num2 = num2*6;
num2 = Math.floor(num2) +1;

let randomImg = "dice" + num1 + ".png" // dice1.png - dice6.png
let randomImg2 = "dice" + num2 + ".png" // dice1.png - dice6.png

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");


 img1.setAttribute("src", randomImg);
img2.setAttribute("src", randomImg2);

