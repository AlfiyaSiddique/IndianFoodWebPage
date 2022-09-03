const navitems = document.querySelector("ul");
const menuicon = document.getElementById("bar-icon");
const bar = '<i class="fa fa-bars"></i>'
const cross = `<i class="fa fa-times"></i>`

function layout(){
  if (screen.width <= 780) {
    removeClass(navitems,"flex")
    menuicon.innerHTML = bar
    removeClass(menuicon,"hidden")

    menuicon.addEventListener("click",()=>{
      if(menuicon.innerHTML == bar){
         menuicon.innerHTML = cross
         navitems.style.right = '0rem';
         addClass(menuicon,"crossUp")
        
      }else{
        menuicon.innerHTML = bar
        navitems.style.right = '-40rem';
        removeClass(menuicon,"crossUp");

      }
    })
    }

}



function addClass(elem, name) {
  elem.classList.add(name);
}

function removeClass(elem, name) {
  elem.classList.remove(name);
}

