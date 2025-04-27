let open = document.querySelector(".btn2")
open.addEventListener("click",function(){
let card_list = document.querySelector('.cas')
let digl_names = ['awp1.png', 'awp2.png', 'awp3.png', 'awp4.png', "awp5.png"]
var el = document.getElementById("div-02");
el.remove()
let cell = document.createElement("div")
let imag = document.createElement("img")
imag.setAttribute("src",digl_names[getRandomInt(4)])
imag.classList.add("imag")
cell.classList.add("card")
cell.appendChild(imag)
card_list.appendChild(cell)
document.getElementById('buttonId').innerText = 'Get'
// for (let i = 0; i < digl_names.length; i += 1) {
//     let cell = document.createElement("div")
//     let imag = document.createElement("img")
//     imag.setAttribute("src",digl_names[i])
//     imag.classList.add("imag")
//     cell.classList.add("card")
//     cell.appendChild(imag)
//     card_list.appendChild(cell)
    
// }

})
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
