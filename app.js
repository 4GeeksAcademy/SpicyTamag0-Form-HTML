const botonEnviar = document.getElementById('botonEnviar');
const camposRequeridos = document.querySelectorAll('input[required]');

function verificarCampos() {
  let todosCompletos = true;
  camposRequeridos.forEach(campo => {
    if (!campo.value) { 
      todosCompletos = false;
    }
  });

  if (todosCompletos) {
    botonEnviar.disabled = false; 
  } else {
    botonEnviar.disabled = true;  
  }
}