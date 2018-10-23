window.onload = function(){
alert("gggg");
boundary1 = document.getElementById("boundary1")

var x = document.querySelectorAll(".boundary");
var boundary = document.getElementsByClassName("boundary");
var a;
var i;

for(a=0; a< boundary.length; a++){
    x[a].onmouseover = function(){
        for(i=0; i< boundary.length; i++){
            x[i].className += " youlose"; 
        }
    }
}
boundary1.onmouseover = function(){
    boundary1.className += " youlose";
}
}
