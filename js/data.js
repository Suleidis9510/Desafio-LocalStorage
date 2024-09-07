// obtener el dato guardado en localStorage
const storedData = localStorage.getItem('dato');
// mostrar el dato en el span con id 'data'
document.getElementById('data').textContent = storedData;
