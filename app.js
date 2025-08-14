const loginForm = document .getElementById( 'login-form' );
const errorMessage = document . getElementById( 'error-message' );
// Credenciales correctas (para efectos del ejemplo)
const USER = 'Admin';
const PASS = 'ROOT';

// Agregamos un evento al formulario para manejar el envi
loginForm. addEventListener( 'submit',function(event) {
event. preventDefault(); 

// previene el envio del formulario
// Obtenemos los valores ingresados por el usuario

const username = document.getElementById( 'username').value;
const password = document.getElementById( 'password' ).value;
// validamos las credenciales
if (username === USER && password ===PASS) {

// Si son correctas, redirigimos y mostramos un mensaje

errorMessage.style.color = 'green';
errorMessage.textContent = 'inicio de sesion exitoso!';
alert('Inicio de sesion exitoso,Bienvenido!');
window.location.href = 'hola.html';


// Redireccionar a Otra pagina (descomentar para usar)

} else {
// Si son incorrectas, mostramos un mensaje de error
errorMessage.style.color = 'red';
errorMessage.textContent = 'Usuario o contraseña incorrectos.';
alert('Error: usuario o contraseña incorrectos');
}
// Limpiamos los campos del formulario
loginForm.reset();
});