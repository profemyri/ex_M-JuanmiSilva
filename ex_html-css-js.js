//Escribe aquí tu código JavaScript
//Modo claro-oscuro
let formulario=document.getElementById("pedidoForm");
let modo="claro";
function cambiarModo(){
    if (modo=="claro"){
        modo="oscuro";
        document.body.style.backgroundColor="black";                
        document.getElementById("cambioModo").innerText="Modo Claro";
    } else {
        modo="claro";
        document.body.style.backgroundColor="white";                
        document.body.style.color="black";
        document.getElementById("cambioModo").innerText="Modo Oscuro";
    }
}

//Contar caracteres
document.getElementById("instrucciones").oninput = function(){
    document.getElementById("contador").textContent = this.value.length;
};

   //Boton enviar cambia al pasar el raton
let botonEnviar=document.getElementById("botonEnviar");
botonEnviar.addEventListener("mouseover", function(){
    botonEnviar.style.backgroundColor = "white";
    botonEnviar.style.color = "blue";
});
botonEnviar.addEventListener("mouseout", function(){
    botonEnviar.style.backgroundColor = "blue";
    botonEnviar.style.color = "white";
});
//mensaje de error
document.getElementById("pedidoForm").addEventListener("submit", function(event) {
    let nombre = document.getElementById("nombre").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let direccion = document.getElementById("direccion").value.trim();

    let errores = [];

    // Validar campos obligatorios
    if (nombre === "") errores.push("Nombre obligatorio.");
    if (telefono === "") errores.push("Telefono obligatorio.");
    if (email === "") errores.push("Email obligatorio.");
    if (direccion === "") errores.push("Direccion obligatoria.");

    // Validar email (debe contener "@")
    if (!email.includes("@")) errores.push("Email.");

    // Validar teléfono (solo números y 9 dígitos)
    if (!/^\d{9}$/.test(telefono)) errores.push("Telefono");

    // Validar dirección (mínimo 18 caracteres)
    if (direccion.length < 18) errores.push("Direccion Longitud.");

    // Si hay errores, mostrar mensaje y evitar el envío
    if (errores.length > 0) {
        event.preventDefault();  // Evita el envío del formulario
        alert("Algunos campos son incorrectos o están incompletos");
    } else {
        mensajeError.innerHTML = ""; // Borra los errores si está todo bien
        // Mensaje de confirmación
        if (confirm("Seguro que quieres confirmar y enviar tu pedido ahora")) {
            this.submit(); // Enviar el formulario si el usuario acepta
            alert("Gracias por tu pedido, " + nombre);
        }
        // Si el usuario cancela, no se hace nada y el formulario no se envía
    }
});






