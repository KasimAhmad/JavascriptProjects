// document.getElementById("count").innerText = 5
let count = 0;
let countElement = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment(){
count += 1;
countElement.innerText = count;
};

function save(){
let countStr = count + " - "; 
saveEl.innerText += countStr;
//Can use textContent instead of innerText & HTML pretag
reset();
};

function reset(){
countElement.textContent =  0;
count = 0
};

console.log(countElement);

// let myAge = 26;
// let humanDogRatio = 7;
// let myDogAge = 26*7;
// console.log(myDogAge)