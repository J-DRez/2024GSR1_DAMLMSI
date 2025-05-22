function calcularTotal() {
    const precio1 = parseFloat(document.getElementById('precio1').value) || 0;
    const precio2 = parseFloat(document.getElementById('precio2').value) || 0;
    let total = precio1 + precio2;
    let mensaje = "Total: " + total.toFixed(2) + " €";
    document.getElementById('resultado').innerHTML = mensaje;
}

function limpiarCampos() {
    document.getElementById('precio1').value = '';
    document.getElementById('precio2').value = '';
    document.getElementById('resultado').innerHTML = '';
}