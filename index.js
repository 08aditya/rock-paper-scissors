
function rock(){
  var num =  Math.floor(Math.random()*3) + 1 ;
  document.getElementById("player").src = "images/rock.jpg";
  if(num == 1){
    document.getElementById("top").innerHTML = "IT'S A TIE";
    document.getElementById("comp").src = "images/rock.jpg";
  }
  else if (num == 2 ) {
    document.getElementById("top").innerHTML = "player wins";
    document.getElementById("comp").src = "images/scissors.png";
  }
  else{
    document.getElementById("top").innerHTML = "bot wins";
    document.getElementById("comp").src = "images/paper.jpg";
  }
}
function paper(){
  var num =  Math.floor(Math.random()*3) + 1 ;
  document.getElementById("player").src = "images/paper.jpg";
  if(num == 1){
    document.getElementById("top").innerHTML = "player wins";
    document.getElementById("comp").src = "images/rock.jpg";
  }
  else if (num == 2 ) {
    document.getElementById("top").innerHTML = "bot wins";
    document.getElementById("comp").src = "images/scissors.png";
  }
  else{
    document.getElementById("top").innerHTML = "IT'S A TIE";
    document.getElementById("comp").src = "images/paper.jpg";
  }
}
function scissors(){
  var num =  Math.floor(Math.random()*3) + 1 ;
  document.getElementById("player").src = "images/scissors.png";
  if(num == 1){
    document.getElementById("top").innerHTML = "bot wins";
    document.getElementById("comp").src = "images/rock.jpg";
  }
  else if (num == 2 ) {
    document.getElementById("top").innerHTML = "IT'S A TIE";
    document.getElementById("comp").src = "images/scissors.png";
  }
  else{
    document.getElementById("top").innerHTML = "player wins";
    document.getElementById("comp").src = "images/paper.jpg";
  }
}
