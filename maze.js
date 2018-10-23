window.onload = function(){
boundary1 = document.getElementById("boundary1")

var x = document.querySelectorAll(".boundary");
var boundary = document.getElementsByClassName("boundary");
var end = document.getElementById("end");
var start = document.getElementById("start");
var status = document.getElementById("status");
var a;
var i;

for(a=0; a< boundary.length; a++){
    x[a].onmouseover = function(){
        for(i=0; i< boundary.length; i++){
            /*alert("YOU LOSE!!");*/
            status.innerHTML = "YOU LOSE!!";
            x[i].className += " youlose"; 
        }
    }
}

end.onmouseover = function(){
    //alert("YOU WIN!!!");
    status.innerHTML = "YOU WIN!!!"

}


start.onclick = function(){
    location.reload();
}

maze.onmouseleave = function(){
    
    for(let q=0; q< boundary.length; q++){
        boundary[q].classList.add("youlose");
        document.getElementById("status").innerHTML = "YOU LOSE!!";
    }
}


boundary1.onmouseover = function(){
    boundary1.className += " youlose";
    x.className += " youlose";
    status.innerHTML = "YOU LOSE!!";
}


}
