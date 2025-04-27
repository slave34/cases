let open = document.querySelector('.btn2')

open.addEventListener("click", function(){
    let elem = document.getElementById('elem').value;
    localStorage.setItem('username', elem)
})