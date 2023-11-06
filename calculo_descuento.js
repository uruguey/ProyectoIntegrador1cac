
//definir valores
const descEfectivo = 0.10;
const recagCredito = 1.15;
const unPago = 1;
const tresPagos = 3;
const seisPagos = 6;

//tomar elementos
const importe = document.getElementById('importe');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');
const cuotas = document.getElementById('cuotas');

//calculo pago 
function calcularPago() {

   
    let total = importe.value;
   
    if(categoria.value == "efectivo"){
        
        total = total-(total * descEfectivo);
    }if(categoria.value == "credito"){
        total = total * recagCredito;

    }else{
        total
    }
      

    totalPagar.textContent = `Total a Pagar: $ ${total}`;
}
btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();

});