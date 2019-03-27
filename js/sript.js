menu.onclick = function myFunction() {
  var x = document.getElementById("myTopnav");

  if(x.className === "topnav") { /*Отображение иконки при окне не более 768px*/
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
