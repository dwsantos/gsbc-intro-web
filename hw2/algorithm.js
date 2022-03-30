const numbers =[];

for (let i=0; i<=100; i++){
numbers[i]=Math.floor(Math.random() * 1000);
}

function iteration(){
//for (let i=0; i<=100; i++){
//    document.getElementById("demo").innerHTML = numbers[i];
//    target.innerHTML += "<p>, </p>";
let nLen = numbers.length;

let text = "<p>, </p>";
for (let i = 0; i < nLen; i++) {
  text += "<p>, </p>" + numbers[i] + "<p>, </p>";
}
text += "<p>, </p>";

document.getElementById("").innerHTML = text;
//}
}

function largestNumber(){
number.sort(function(a, b){return a - b})
numbers.pop();

}

function sum(){
    let s=0;
    let nLen=numbers.length;
for (let i=0; i<nLen; i++){
    s = s + numbers[i];
}
}