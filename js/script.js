
function trocar(){
    var btn = document.getElementById("btn-dia");
    btn.classList.toggle("btn-noite");
    
    var back = document.getElementById("dia");
    back.classList.toggle("noite");

    if (btn.innerHTML === "Dia"){
      btn.innerHTML = "Noite";
    } else{
      btn.innerHTML = "Dia";
    }

    btn.style.transition = "all 1s";
    back.style.transitionDelay = "all 2s";
}
