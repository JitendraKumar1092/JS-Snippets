const box = document.getElementById("myDiv")
window.addEventListener("keydown" , move)
let x=0, y=0;
function move(event){
    switch(event.key){
        case "ArrowDown":
            y += 5;
        box.style.top = y + "px";
        break
        case "ArrowUp":
            y -= 5;
        box.style.bottom = y + "px";
        break
    }
}