const nav = document.querySelector('nav');
const toggle = document.querySelectorAll('.toggle');


/* Adicionando a classe show para abrir e fechar o menu */
for(let menu of toggle){
    menu.addEventListener('click',()=>{
        nav.classList.toggle('show')
    })
}

