const numbers =[];

for (let i=0; i<=100; i++){
numbers[i]=Math.floor(Math.random() * 1000);
}


//for (let i=0; i<=100; i++){
//    document.getElementById("demo").innerHTML = numbers[i];
//    target.innerHTML += "<p>, </p>";
function num_Array(numbers){
let nLen = numbers.length;

let text = "";
for (let i = 0; i < nLen; i++) {
  text += numbers[i] + ", ";
  if(i == 100){
    text += numbers[i] + ", and "
    }
    if(i ==100){
    text+=numbers[i] + ".";
  }
}
}
 document.getElementById("numbers").innerHTML = text;


//}

function kPop(numbers){
  numbers.sort(function(a, b){return a - b});
document.getElementById("largest_number").innerHTML = numbers.pop();
}

function sum(numbers){
    let s=0;
    let nmLen=numbers.length;
for (let i=0; i<nmLen; i++){
    s = s + numbers[i];
}
return s;
//document.getElementById("sum").innerHTML = s;
}
