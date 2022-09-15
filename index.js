//PRIMER PROGRAMA
let horasTrabajadas = prompt("Ingrese las horas trabajadas el profesor: "," ");
let tarifa = prompt("Ingrese la tarifa del profesor: "," ");
let salario, horasExtra;
function tarifaProfe(horas){
    let nuevaTarifa;
    if (horasTrabajadas>40) {
        horasExtra=horasTrabajadas-40;
        nuevaTarifa=tarifa*0.5+tarifa;
        salario=(nuevaTarifa*horasExtra)+tarifa*40;
    }else{
        salario=horasTrabajadas*tarifa;
    }
    return salario;
}

document.write(
    `
    <h1>SALARIO DEL PROFESOR</h1>
    <h2>El salario del profesor es: ${tarifaProfe(horasTrabajadas)}</h2>
    `);
//SEGUNDO PROGRAMA
let radio = prompt("Ingrese el radio de la circunferencia: "," ");
let perimetro = 2*Math.PI*radio;
let perimetroReducidoALaMitad=perimetro/2;
let perimetroReducidoALaCuartaParte=perimetro/4;
document.write(
    `
    <h1>PERIMETRO CIRCUNFERENCIA</h1>
    <h2>El perímetro de la circunferencia es: ${perimetro}</h2>
    <h2>El perímetro de la circunferencia reducido a un 50% es: ${perimetroReducidoALaMitad}</h2>
    <h2>El perímetro de la circunferencia reducido a un 25% es: ${perimetroReducidoALaCuartaParte}</h2>
    `);
//TERCER PROGRAMA
let horsTrabajadas = prompt("Ingrese las horas trabajadas: "," ");
let tarifaTrabajo = prompt("Ingrese la tarifa: "," ");
let salarioPersona = horsTrabajadas*tarifaTrabajo;
function salarioPorcentajes(salario){
    let salario10Porciento = salarioPersona*0.1;
    let salario30Porciento = salarioPersona*0.3;
    let salario60Porciento = salarioPersona*0.6;
    let salario80Porciento = salarioPersona*0.8;
    document.write(
        `
        <h1>SALARIO DE LA PERSONA</h1>
        <h2>El salario de la persona es: ${salarioPersona}</h2>
        <h2>El salario de la persona en un 10% es: ${salario10Porciento}</h2>
        <h2>El salario de la persona en un 30% es: ${salario30Porciento}</h2>
        <h2>El salario de la persona en un 60% es: ${salario60Porciento}</h2>
        <h2>El salario de la persona en un 80% es: ${salario80Porciento}</h2>
        `
    );
}
salarioPorcentajes(salarioPersona);
//CUARTO PROGRAMA
let dinero = -1;
while(dinero <=0){
    dinero = prompt("Ingrese el dinero a convertir: ", " ");
}

function billetesYMonedasNecesarios(dineroRecibido){
    let billete50=0, billete20=0, billete10=0, monedas5=0, monedas1=0;
            
            billete50 = dineroRecibido/50;
            dineroRecibido = dineroRecibido % 50;
        
            billete20 = dineroRecibido/20;
            dineroRecibido = dineroRecibido % 20;
        
            billete10 = dineroRecibido/10;
            dineroRecibido = dineroRecibido % 10;
        
            monedas5= dineroRecibido/5;
            dineroRecibido = dineroRecibido % 5;
    
            monedas1= dineroRecibido/1;
            dineroRecibido = dineroRecibido % 1;

        let cantBille50, cantBille20, cantBille10, cantMone5, cantMone1;
            cantBille50=Math.trunc(billete50);
            cantBille20=Math.trunc(billete20);
            cantBille10=Math.trunc(billete10);
            cantMone5=Math.trunc(monedas5);
            cantMone1=Math.trunc(monedas1);
        document.write(
        `
        <h1>BILLETES</h1>
        <h2>Billetes de 50: ${cantBille50}</h2>
        <h2>Billetes de 20: ${cantBille20}</h2>
        <h2>Billetes de 10: ${cantBille10}</h2>
        <h2>Monedas de 5: ${cantMone5}</h2>
        <h2>Monedas de 1: ${cantMone1}</h2>
        `);
    }
billetesYMonedasNecesarios(dinero);
//QUINTO PROGRAMA
let notaParcial1 = prompt("Ingrese la nota de su parcial 1"," ");
let notaParcial2 = prompt("Ingrese la nota de su parcial 2"," ");
let notaParcial3 = prompt("Ingrese la nota de su parcial 3"," ");
let notaExamenFinal = prompt("Ingrese la nota de examen Final"," ");
let notaTrabajoFinal = prompt("Ingrese la nota de su trabajo Final"," ");
function calificacionFinal(notP1, notP2, notP3, notEF, notTF ){
    let notaFinalParciales = (notP1+notP2,notP3)*0.55;
    let notaFinalExamenFinal = (notEF)*0.30;
    let notaFinalTrabajoFinal = (notTF)*0.15;
    let notaFinalNeto = notaFinalParciales+notaFinalExamenFinal+notaFinalTrabajoFinal;
    return notaFinalNeto;
    
}
let notaFinalNeto=calificacionFinal(notaParcial1,notaParcial2,notaParcial3,notaExamenFinal,notaTrabajoFinal);
document.write(
    `
    <h1>NOTA FINAL</h1>
    <h2>La nota final obtenida es: ${notaFinalNeto}</h2>
    `
);



