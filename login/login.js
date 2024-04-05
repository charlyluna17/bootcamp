const formularioLogin = document.getElementById("formulario-login");

formularioLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  // Validar usuario y contraseña (en este caso, solo se comprueba si están vacíos)
  if (!usuario || !contrasena) {
    console.error("Usuario o contraseña no válidos");
    return;
  }

  // Mostrar usuario y contraseña en la consola
  console.log(`Usuario: ${usuario}`);
  console.log(`Contraseña: ${contrasena}`);

  // En un caso real, aquí se debería enviar la información a un servidor para 
  // verificar la autenticación del usuario.
});