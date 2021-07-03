

function calculo() {
    var val1 = Number(document.getElementById('val1').value);
    var repe = Number(document.getElementById('val2').value);
    var rsdo = val1;
    
    for (let i = 1; i<= repe; i++) {
        rsdo = rsdo * rsdo;
        console.log('En la Iteracción '+i+' el Resultado es: '+rsdo)
        document.getElementById('rsdo').value += rsdo+' | ';
    }    
}