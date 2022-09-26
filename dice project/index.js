var random_number1 = (Math.floor(Math.random()*6)+1);
var randomdiceimage = "dice" + random_number1 +".png";
var imgsrc = "images/"+ randomdiceimage;
document.querySelectorAll("img")[0].setAttribute("src" , imgsrc);


var random_number2 = (Math.floor(Math.random()*6)+1);
var randomdiceimage2 = "dice" + random_number2 +".png";
var imgsrc2 = "images/"+ randomdiceimage2;
document.querySelectorAll("img")[1].setAttribute("src" , imgsrc2);


if(random_number1>random_number2)
{var head="Player1 wins!"}
else if (random_number2>random_number1) {
  var head="Player2 wins!"
}
else{var head = "Draw!"};
document.querySelector("h1").innerHTML=head;
