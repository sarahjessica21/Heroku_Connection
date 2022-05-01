function myFunction() {
  var p = document.getElementById("mydata");

var rollDie = Math.floor((Math.random() * 6) + 1);
 
    var num = Math.floor((Math.random() * 6) + 1);

    p.innerHTML = 'Dice rolls are "' + rollDie + '" "' + num + '"';
  
  if(rollDie == 6){
    alert("HELLO!");
  }
  if(rollDie == 3){
        alert("HOW ARE YOU?");
  }
  if(rollDie == 2){
    alert("SUP");
  }
}
  
function rollDie() {
  var num = Math.floor(Math.random() * 6);
  num = num + 1;
  return num;
}
  
