const bar = document.getElementById("bar")

const menu = document.getElementById("menu")

bar.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    // if(menu.style.display = "hidden"){
    //     menu.style.display = "block"
    // }else{
    //     menu.style.display = "hidden"
    // }
})

