var nombre = prompt('Ingresa tu Nombre:');
alert('Hola '+nombre+'. Ya podes Hacer la cuenta que quieras.')
var resultados = []

function calculo() {
    var rsdo;
    var val1 = Number(document.getElementById('val1').value);
    var val2 = Number(document.getElementById('val2').value);
    var oper = document.getElementById('oper').value;

    switch (oper) {
        case 'suma':
            rsdo = val1 + val2;
        break;
        case 'resta':
            rsdo = val1 - val2;
        break;
        case 'multi':
            rsdo = val1 * val2;
        break;
        case 'divi':
            rsdo = val1 / val2;
        break;
    }
    console.log('Resultado: '+rsdo);
    let calc = {
        val1: val1,
        val2: val2,
        operacion: oper,
        Resultado: rsdo
    }
    resultados.push(calc);
    document.getElementById('rsdo').value = rsdo;
    console.log(JSON.stringify(resultados));
}