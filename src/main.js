export default class App {

sumatoriaSerieUno(numero){
    
    let suma=0;
    for(let i=1; i<=numero; i++){
        suma= suma + (1/i);
    }
    return suma;
}

sumatoriaSerieDos(numero){
    let suma=1;
    let i=2;
    while(i<=numero){
        if(i%2===0){
            suma= suma + (1/i);
        } else{
            suma= suma - (1/i);
        }
        i++;
    }
    return suma;
}

esPrimo(numero){
    let i=2;
    do{
        if(numero%i===0){
            return false
        }
        i++
    } while (i<=(numero-1));
    if(numero>0 && numero!==0){
        return true;
    }
   
}










}

let app = new App();

console.log(app.sumatoriaSerieUno(6));

console.log(app.sumatoriaSerieDos(6));

console.log(app.esPrimo(7));
console.log(app.esPrimo(4));
console.log(app.esPrimo(5));
console.log(app.esPrimo(27));