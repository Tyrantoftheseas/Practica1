// Programa Hola Mundo
console.log('¡Hola Mundo desde GitHub Actions!');
console.log('Integración Continua - ITLA DevOps');

// Función adicional para demostrar funcionalidad
function saludar(nombre) {
  return `Hola ${nombre}, bienvenido al curso de DevOps`;
}

const mensaje = saludar('Estudiante');
console.log(mensaje);

// Mostrar fecha y hora actual
const fecha = new Date().toLocaleString('es-DO');
console.log(`Ejecutado el: ${fecha}`);
