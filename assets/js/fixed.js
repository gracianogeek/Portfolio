(function () {

    let navbar = document.querySelector('#navbar'); // declaramos navbar buscando en el documento #navbar
    let main = document.querySelector('main'); // declaramos main buscando en el documento la etiqueta main
    let navbarHeight = navbar.getBoundingClientRect().height; //declaramos navbarHeight getBoundingClientRect information about the size of an element and its position relative to the viewport.
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPos; //declaramos windowPos que guardara el scrollY de la pagina
    let isFixed = false; //Declaramos isFixed como false porque ese es el estado normal de la pagina al iniciar

    function updatePos() {
        windowPos = window.scrollY; //buscara el scroll Y que es los pixeles que hay verticalmente esto guardandolo en la variable windowPos
    }

    function onScroll() { //creamos funcion onScroll

        updatePos(); // Ejecutamos la funcion updatePos
    
        if (windowPos >= breakpoint && !isFixed) { //si windowPos es mayor o igal que al breakpoint y ifFixed es falso entonces...
            navbar.classList.remove('open'); //Removera la clase open que abre el navbar

            navbar.classList.add('navbar-fixed'); //Agregara la clase nav-fixed que pondra fijo el navbar
            main.style.cssText = "margin-top: " + navbarHeight + 'px;'; // ponerle al main para que no salte un margin-top que sea igual al navbarHeigh (altura del navbar) px 
            isFixed = true; //Para optimizar la pagina ponemos esto para que el if no siga corriendo asi haciendo la pagina mas rapida
    
        } else if (windowPos < breakpoint && isFixed) { // tambien si windowPos es menor que el breakpoint y el isFixed es true entonces...
            navbar.classList.remove('navbar-fixed'); //el navbar removera la clase 'navbar-fixed' que es lo que hace poner fija la navbar
            main.style.cssText = "margin-top: " + 0; //a main se le pondra el margin-top de 0 px como lo tenia normalmente
            isFixed = false; //Pondre el isFixed false para que no siga ejecutando esta funcion y la pagina vaya mas rapida
        }
    }

    document.addEventListener('scroll', onScroll); // escuchar el evento scroll y enviarlo a la funcion onScroll()

})()
