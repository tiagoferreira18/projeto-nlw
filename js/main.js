const nav = document.querySelector('nav');
const toggle = document.querySelectorAll('.toggle');
const links = document.querySelectorAll('nav ul li a')

/* Adicionando a classe show para abrir e fechar o menu */
for(let menu of toggle){
    menu.addEventListener('click',()=>{
        nav.classList.toggle('show')
    })
}

for(let link of links){
    console.log(link);
    link.addEventListener("click",()=>{
        nav.classList.remove('show')
    })

}

/*  Mudar o header da página quando der scroll */

const header = document.querySelector('#header');

/* Objeto header com a propriedade offsetHeight */
const navHeight = header.offsetHeight;

/* Função de callback para scroll */
window.addEventListener('scroll',()=>{
    /* scroll yu eicho vertical */
    if(window.scrollY >=navHeight){
        //scroll maior que a altura do header
        header.classList.add('scroll')
    }else{
        //menor que a altura do header
        header.classList.remove('scroll')
    }
})

/* testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
        
    },
    mousewheel: true,
    keyboard: true
});


