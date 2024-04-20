console.log("JS OK")
var c = 0

const menu = document.getElementById("menu")
const dropdown = document.getElementById("menu_div")

menu.addEventListener("click", () => {
    console.log("cliccato")
    if (dropdown.style.transform == 'translateX(0px)'){
        dropdown.style.transform = 'translateX(-120%)'
    }
    else{
        dropdown.style.transform = 'translateX(0)'
    }      
})


function openCARAFA() {
    window.open('https://www.carafagiustiniani.edu.it/', '_blank');
}
function openTEAM() {
    window.open('us.html', '_blank');
}
function openSTORY() {
    window.open('story.html', '_blank');
}
function openMARGHERITA() {
    window.open('https://www.iismargheritahackbaronissi.edu.it/', '_blank');
}
function openDOCUMENTAZIONE() {
    window.open('https://docs.google.com/document/d/1jyLSL496NYhmk4UnCET51YdN5CDwc81R/edit', '_blank');
}