document.getElementById('buttonText').addEventListener('click', () => {

    // obtener el valor del input
 const inputText = document.getElementById('inputText').value;

    // guardar el valor en localStorage
    localStorage.setItem('dato', inputText)
    
    // redirigir a la pagina data.html
window.location.href = 'data.html'
})
