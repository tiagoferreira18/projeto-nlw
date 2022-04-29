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
/* Função para mudar o header da pagina */
function changeHeaderWhenScroll(){


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
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
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



/* Menu ativo conforme a seção visivel na página */

/* Todas as seções que possuem um id */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSec(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStar = checkpoint >= sectionTop
        const checkpointEnd = checkpoint<= sectionTop + sectionHeight

        if(checkpointStar && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId +']').classList.add('active')
        }else{
            document.querySelector('nav ul li a[href*=' + sectionId +']').classList.remove('active')
        }


    }


}


    /* when scrool */

    window.addEventListener('scroll', ()=>{
        changeHeaderWhenScroll()
        activateMenuAtCurrentSec()
    })

