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

/* Função para mudar o header da pagina */
function changeHeaderWhenScroll(){

/*  Mudar o header da página quando der scroll */
const header = document.querySelector('#header');
/* Objeto header com a propriedade offsetHeight */
const navHeight = header.offsetHeight;

if(window.scrollY >=navHeight){
    //scroll maior que a altura do header
    header.classList.add('scroll')
}else{
    //menor que a altura do header
    header.classList.remove('scroll')
}

}




/* testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
        
    },
    mousewheel: true,
    keyboard: true
});

/* scrollReveal: Mostrar elementos quando der scroll na página */


// const scrollReveal = ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 700,
//     reset: true,
// })

// scrollReveal.reveal(
//     `#home .image, #home .text, 
//      #about .image, #about .text,
//      #services header, #services .card,
//      #testimonials header, #testimonials .testimonials,
//      #contact .text, #contact .links,
//      footer .brand, footer .social

//     `, { interval: 100})


    /* when scrool */

    window.addEventListener('scroll', ()=>{
        changeHeaderWhenScroll()
    })

