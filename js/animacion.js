let animacion = document.querySelectorAll(".cursos_logo");


function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i = 0; i < animacion.length; i++ ){
        let alturaAnimacion = animacion[i].offsetTop;
        if(alturaAnimacion - 500 < scrollTop){
            animacion[i].style.opacity = 1;
            animacion[i].style.animation = 'MostrarTop 1.5s'
        }
    }
}

window.addEventListener('scroll', mostrarScroll);