function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();

}
document.querySelector('.tecla_pom').onclick = tocaSomPom;


//o que é uma contante...
const ListaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

while  (contador <9) {

    ListaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);

}


//document.querySelector('.tecla_pom').onclick = tocaSomPom;

//document.querySelector('#som_tecla_pom').play();
//document.querySelector('.tecla_pom')
