
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})


// function autenticarUsuario(user, password){
//     if((user=='julianr')&&(password=='123')){
//         return true;
//     }else{
//         return false;
//     }
// }

// let usuario = prompt('Cual es tu nombre de usuario?');
// let contrasenia = prompt('Cual es tu contraseña?');

// let autenticado = autenticarUsuario(usuario, contrasenia);
// console.log(autenticado);

// if(autenticado){
//     alert("¡Bienvenido a RzShop!",usuario);
// }else{
//     alert('Usuario no reconocido, vuelve a intentarlo.');
// }
