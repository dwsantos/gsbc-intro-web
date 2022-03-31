const numbers =[];

for (let i=0; i<=100; i++){
numbers[i]=Math.floor(Math.random() * 1000);
}


//for (let i=0; i<=100; i++){
//    document.getElementById("demo").innerHTML = numbers[i];
//    target.innerHTML += "<p>, </p>";
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
 // document.getElementById("numbers").innerHTML = text;


//}


  numbers.sort(function(a, b){return a - b});
//  document.getElementById("largest_number").innerHTML = numbers.pop();



    let s=0;
    let nmLen=numbers.length;
for (let i=0; i<nmLen; i++){
    s = s + numbers[i];
}
//document.getElementById("sum").innerHTML = s;

