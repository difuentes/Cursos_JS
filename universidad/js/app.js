/* apuntes 
let elemento ;

elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.images;
elemento = document.images[2].getAttribute('src');


//Scripts
elemento = document.scripts;
elemento = document.images;


let imagenes = document.images;
let imgenesArreglo = Array.from(imagenes);

imgenesArreglo.forEach(function(imagen)
{
    console.log(imagen)
})

console.log(elemento);
*/
/* 
let encabezado;

encabezado = document.getElementById("encabezado").textContent;
console.log(encabezado);

let enlace;
//trae el primer enlace hijo de las etiquetas  <a>
enlace = document.querySelector("#principal  a:first-child");
//trae el ultimo enlace hijo de las etiquetas  <a>
enlace = document.querySelector("#principal  a:last-child");
//trae el enlace enlace hijo seleccionado  de la etiquetas  <a>
enlace = document.querySelector("#principal  a:nth-child(3)");
console.log(enlace);
 */
//Muestra mixta de queryselector y classname
/* const listaEnlaces = document
  .querySelector("#principal")
  .getElementsByClassName("enlace");
console.log(listaEnlaces);

const enlacesQueryall = document.querySelectorAll(
  "#principal a:nth-child(odd)"
);

enlacesQueryall.forEach(function(impares) {
  impares.style.color = "red";
});
console.log(enlacesQueryall); */

//nodos con Js

//const nodoJS = document.querySelector('#pricipal');
//console.log(nodoJS);

//1 elementos html
//2 Atributos
//3 Text Node
//8 comentarios 
//9 documentos
//10 doctype
//

//ir a elemento anterior del mismo tipo
/* 

const previousEnlacesEjmplo = document.querySelectorAll('.enlace');

console.log(previousEnlacesEjmplo[3].previousElementSibling);

//ir al elemento siguiete del mismo tipo

const nextEnlance = document.querySelectorAll('.enlace');

console.log(nextEnlance[0].nextElementSibling);

//Agregar elemento crear enlace 
const crearEnlace = document.createElement('a');

crearEnlace.className ='enlace';

crearEnlace.id = 'nuevo-id';

crearEnlace.setAttribute('href','#');

crearEnlace.textContent = ("soy el enlace nuevo");

//agregar nuestro elemento creado al html
document.querySelector('#secundaria').appendChild(crearEnlace);
console.log(crearEnlace);

//
//Modificar elementos


const nuevoEncabezado = document.createElement('h3');

nuevoEncabezado.id = 'encabezado';

nuevoEncabezado.appendChild(document.createTextNode('los mejores cursos'));

console.log(nuevoEncabezado);

//remplazar elemento

const anterior = document.querySelector('#encabezado');

const padre = document.querySelector('#lista-cursos');

padre.replaceChild(nuevoEncabezado,anterior);
console.log(anterior.parentElement);

//
//eliminar 
//

const primerli = document.querySelector('.enlace');

let elemento2 ;
elemento2 = primerli.className;


//get atribute trae valor
//set atribute cambie el valor
//hash atribute busca si esta el atributo
//remove atribure elimina elemento

//---------------------------------------------------
//event lisener
document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton);
/* 
function ejecutarBoton(e)
{
  //prevenir accion por default
  e.preventDefault();

  let elemento ;
  elemento = e ;
  elemento = e.target;
  elemento = e.target.id;
  
  console.log(e);
}

document.querySelector('#encabezado').addEventListener('click', function(e){
  e.target.innerText= 2+2 ;
}) */

//otros eventos con click

const encabezado2 = document.querySelector('#encabezado');

const enlaces2 =  document.querySelector('.enlace');
//traer valor  carrito 
const boton =  document.querySelector('#vaciar-carrito'); 
//click
//boton.addEventListener('click',obtenerEvento);

//Evento Doble clic
//boton.addEventListener('dbclick',obtenerEvento);

//Evento Mouse enter
//boton.addEventListener('mouseenter',obtenerEvento);

//Evento Mouse Leave
//boton.addEventListener('mouseleave',obtenerEvento);

//Evento Mouse over
//boton.addEventListener('mouseover',obtenerEvento);

//Evento Mouse out
//boton.addEventListener('mouseout',obtenerEvento);

//Evento Mouse down
//boton.addEventListener('mousedown',obtenerEvento);

//Evento Mouse UP
//boton.addEventListener('mouseup',obtenerEvento);

//Evento Mouse Move
//boton.addEventListener('mousemove',obtenerEvento);



//funcion obteneEvento
/* function obtenerEvento(e){
 console.log(`Evento: ${e.type}`);
} */

const busqueda = document.querySelector('#buscador');
//evento cuando escribes keydown 
//busqueda.addEventListener('keydown',funcionObtenerEvento);

//evento cuando escribes keyup 
//busqueda.addEventListener('keyup',funcionObtenerEvento);

//evento cuando escribes keypress 
//busqueda.addEventListener('keypress',funcionObtenerEvento);

//evento cuando escribes keyup 
//busqueda.addEventListener('keyup',funcionObtenerEvento);


//evento cuando escribes keypress 
//busqueda.addEventListener('keypress',funcionObtenerEvento);

//evento cuando escribes keypress 
//busqueda.addEventListener('focus',funcionObtenerEvento);

//evento que se ejecuta cuando estas afuera del evento,comprobar caracteres  blur 
//busqueda.addEventListener('blur',funcionObtenerEvento);


//evento que se ejecuta cuando cortan en tu sitio
//busqueda.addEventListener('cut',funcionObtenerEvento);

//evento que se ejecuta cuando copian en tu sitio
//busqueda.addEventListener('copy',funcionObtenerEvento);

//evento que se ejecuta cuando pegan en tu sitio
//busqueda.addEventListener('paste',funcionObtenerEvento);

//evento que controla todo
//busqueda.addEventListener('input',funcionObtenerEvento);

//evento para cuando se cambian check o cb
//busqueda.addEventListener('change',funcionObtenerEvento);


////////evento bubbling 
//evento en cadena que 
/* const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const AgregarCarrito= document.querySelector('.agregar-carrito');


card.addEventListener('click',function(){
  console.log('click en card');
})

infoCurso.addEventListener('click',function(){
  console.log('click en infocard');
})

AgregarCarrito.addEventListener('click',function(e){
  //cancela la propagacion
  e.stopPropagation();
  console.log('click agregar carrito');
})
 */

/* function funcionObtenerEvento(e){
  //console.log(busqueda.value);
  document.querySelector('#encabezado').innerText = busqueda.value;
  console.log(`Evento : ${e.type}`);
} */

////Delegation

document.body.addEventListener('click',eliminarElemento);

function eliminarElemento(e)
{
  e.preventDefault();

  console.log('click');
 // console.log(e.target.classList);

 if(e.target.classList.contains('borrar-curso')){
    console.log(e.target.parentElement.parentElement.remove());
 }
 else {
   console.log("no");
 }

 if(e.target.classList.contains('agregar-carrito'))
 {
   console.log('curso agregado');
 }


}



