(function () {
    let navbar = document.querySelector('#navbar'); // buscamos en el documento el elemento #navbar y declaramos la variable navbar con ella
    let hamburger = document.querySelector('#hamburguer'); // buscamos hamburguer en el documento ... ...
    hamburger.addEventListener('click', () => { //Seleccionamos la variable hamburger y escuchamos un evento click
        navbar.classList.toggle('open'); //El cual creara una clase llamada 'open' y esta sera implementada con un interruptor toggle para que aparezca y desaparezca
    });
})()


