function autenticarUsuario(user, password){
    if((user=='julianr')&&(password=='123')){
        return true;
    }else{
        return false;
    }
}

let usuario = prompt('Cual es tu nombre de usuario?');
let contrasenia = prompt('Cual es tu contraseña?');

let autenticado = autenticarUsuario(usuario, contrasenia);
console.log(autenticado);

if(autenticado){
    alert("¡Bienvenido a RzShop!",usuario);
}else{
    alert('Usuario no reconocido, vuelve a intentarlo.');
}


// //Calcular interés de pago con tarjeta de crédito


function calcularInt(precio){
    let Int = precio * 0.30;
    console.log('El interés de $'+precio+' es $'+Int);
}

calcularInt(100);

let valorProducto = parseFloat(prompt('Ingresa el precio del producto'));
calcularInt(valorProducto);

let precioi12 = 300000;
let costEnvio = 2000;

let suma = precioi12 + costEnvio;

let resta = precioi12 - costEnvio;

let multip = precioi12 * costEnvio; 

let divide = precioi12 / costEnvio; 



//----------------------------------------------------------------------//



console.table(productos);
const carro = [];
let contenedorProds = document.getElementById('misprods');
let tablaBody = document.getElementById('tablabody');

//DOM
function renderizarProductos(listaProds){
    //vaciamos en contenedor para evitar duplicados
    contenedorProds.innerHTML='';
    //cargamos las cartas de los productos solicitados
    for(const prod of listaProds){
        contenedorProds.innerHTML+=`
            <div class="card" style="width: 18rem;">
            <img src="${prod.foto}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">${prod.precio}</p>
                <button id=${prod.id} class="btn btn-dark compra">¡Lo quiero!</button>
            </div>
        </div>
        `}
    

    let botones = document.getElementsByClassName('compra');
    for (const boton of botones){
        //opcion 1 - addEventListener
        boton.addEventListener('click',()=>{
            console.log('Hiciste click en el boton id: '+boton.id);
            const prodACarro = productos.find((producto) => producto.id == boton.id);
            console.log(prodACarro);
            //Agregar productos al carro de compras
            agregarACarrito(prodACarro);
        })

        //opcion 2
        boton.onmouseover = () => boton.classList.replace('btn-primary', 'btn-warning');
        boton.onmouseout = () => boton.classList.replace('btn-warning','btn-primary');
    }
}

renderizarProductos(productos);

function agregarACarrito(producto){
    carro.push(producto);
    console.table(carro);
    alert('Agregaste '+producto.nombre+' al carrito');
    tablaBody.innerHTML +=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
}


