var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("nav1").style.top = "0";
} 
else {
  document.getElementById("nav1").style.top = "-18vh";
  document.getElementById("nav1").style.transition = "top 0.3s";
}
prevScrollpos = currentScrollPos;
if(document.body.scrollTop > 155 || document.documentElement.scrollTop > 155){
  document.getElementById("nav1").style.backgroundColor="rgba(255, 255, 255, 0.862)";
}
else{
  document.getElementById("nav1").style.top = "0";
  document.getElementById("nav1").style.backgroundColor="transparent";
  document.getElementById("nav1").style.transition="background-color 1s"
}
}