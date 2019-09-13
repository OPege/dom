let menuHamburguer = document.querySelector(".menu-hamburguer");
let nav = document.querySelector("nav");

function mostrarMenu(){
   // nav.style.display = "block";
   //Jeito 1
   //if(nav.classList.contains("visivel")){
    //nav.classList.remove("visivel");}else{
   // nav.classList.add("visivel");
    //}
    //Jeito 2
    //if(!nav.classList.contains("visivel")){
    //    nav.classList.remove("visivel");}else{
    //  nav.classList.add("visivel");
    // }
    //Jeito 3
    nav.classList.toggle("visivel");
}

menuHamburguer.onclick = 
mostrarMenu;
