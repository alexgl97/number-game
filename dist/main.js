var myValue = document.getElementById('value');
var choice = document.getElementById('choice');
var result = document.getElementById('result');
const btns = document.querySelectorAll('.button');
var nr = document.getElementById('nr');

// let randNum = 

// var arr = [];
// while(arr.length < 3){
//   var r = Math.floor(Math.random() * 3) + 1;
//   if(arr.indexOf(r) === -1) arr.push(r);
// }



btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    mySelection = e.target.innerText;
    choice.textContent = mySelection;

    
    let randNum = getRandom();
    myValue.textContent = randNum;


  if(mySelection == randNum){
    result.textContent = "You've won!"
    result.className = 'green';
    nr.className = 'green'
    
  }
  if(mySelection != randNum) {
    result.textContent = "You've lost!";
    result.className = 'red';
    nr.className = 'red';
  }

  });
});


function getRandom() {
  return Math.floor(Math.random() * 5) + 1;
}
