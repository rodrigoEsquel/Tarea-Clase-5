const $botonEntrar = document.querySelector("#boton-entrar");
$botonEntrar.onclick = function() {
    const edadUsuario = document.querySelector("#edad-usuario");
    const saludo = document.querySelector("#saludo");
    const EDAD_PARA_PASAR = 18
    if (Number(edadUsuario.value) >= EDAD_PARA_PASAR) {
        const nombreUsuario = document.querySelector("#nombre-usuario");
        const apellidoUsuario = document.querySelector("#apellido-usuario");
        
        saludo.innerText = `Bienvenido ${nombreUsuario.value} ${apellidoUsuario.value}!`;        
    } else {
        saludo.innerText = "No podes pasar!";
    }
    return false;
}