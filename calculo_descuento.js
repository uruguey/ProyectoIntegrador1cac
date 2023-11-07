
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
const btnBorrar = document.getElementById('borrar');
const cuotas = document.getElementById('cuotas');
const banco = document.getElementById('banco');

//calculo pago 
function calcularPago() {


    let total = importe.value;
    
    if(categoria.value == "efectivo"){        
        total = total-(total * descEfectivo);

    }if(categoria.value == "credito" && banco.value == "no-bancarizada" && cuotas.value == "uno"){
         total = total * recagCredito;

     }if(categoria.value == "credito" && banco.value == "no-bancarizada" && cuotas.value == "tres"){
       total = (total * recagCredito)/3;

     }if(categoria.value == "credito" && banco.value == "no-bancarizada" && cuotas.value == "seis"){
         total = (total * recagCredito)/6;

    }if(categoria.value == "credito" && banco.value == "bancarizada" && cuotas.value == "uno"){
         total

    }if(categoria.value == "credito" && banco.value == "bancarizada" && cuotas.value == "tres"){
        total= total/3;

    }if(categoria.value == "credito" && banco.value == "bancarizada" && cuotas.value == "seis"){
        total= total/6;

    }if(categoria.value == "credito" && banco.value == "santander" && cuotas.value == "uno"){
         total= total-(total * descEfectivo);

     }if(categoria.value == "credito" && banco.value == "santander" && cuotas.value == "tres"){
       total = (total-(total * descEfectivo))/3;

     }if(categoria.value == "credito" && banco.value == "santander" && cuotas.value == "seis"){
         total = (total-(total * descEfectivo))/6;

    }else{
        total
    }
    


    totalPagar.textContent = `Total a Pagar: $ ${total}`;
}
function limpiar() {
    totalPagar.textContent = "Total a Pagar: $ 0";
    importe.value = "";

}
btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();

});
btnBorrar.addEventListener('click', (e) => {
    e.preventDefault();
    limpiar();

});
