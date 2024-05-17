/*PROBLEMA 1*/
function rectangulo (ancho, altura){
return ancho * altura
}
let area = rectangulo(10,5)
console.log(area);

/*PROBLEMA 2*/
function triangulo (base, altura){
return base * altura / 2
}    
let area2 = triangulo(10,5)
console.log(area2);

/*PROBLEMA 3*/
let LargoDelArray = ['Mystic','vaidown']
console.log(LargoDelArray.length);

/*PROBLEMA 4*/
function CantidadDeLetras (MysticCat){
return MysticCat.length
}
let MysticCat = "Mystic"
console.log(CantidadDeLetras(MysticCat));

/*PROBLEMA 5*/
function DolarHoy (pesos, cambio){
    return pesos / cambio  
}
let dolares = DolarHoy (10000, 1000)
console.log(dolares);

/*PROBLEMA 6*/
function precioFinal (Precio, IVA){
return Precio * IVA
}
let precios = precioFinal (10000, 1.21)
console.log(precios);

/*PROBLEMA 7*/
function mitad (numero, medio){
    return numero / medio
}
let miti = mitad (150, 2)
console.log(miti);

/*PROBLEMAS DE OBJ LITERAL*/

/*PROBLEMAS 1*/
let MisDatos = {
    nombre: 'Sebastian',    
    apellido: 'Kralicek',
    dni: '46956134',
    comidasFavoritas: ['Carne', 'Fideos', 'Milanesa'],
    edad: 18,
   saludar: function() {
        return 'Hola mi nombre es ' + this.nombre + " " + this.apellido + ' y tengo ' + this.edad + ' anos. Mi primer comida favorita es ' + this.comidasFavoritas[0] + ".";
    }
};
/*PROBLEMAS 2*/
console.log(MisDatos.saludar());  

/*PROBLEMAS 3*/
let auto = {
    marca: 'Peugeout',
    modelo: 'Style',
    anio: 2022,
    color: 'gris',
    Posicion: 0,
}
function avanzar (posicion, n){
    return posicion + n 
    }
    let avanzo = avanzar (0, 1)

 function retroceder (posicion, n){
    return posicion - n 
    }
    let retrocede = retroceder (0, 1)
console.log(avanzo);
console.log(retrocede);

/*PROBLEMA 4*/
let NuevoAuto = {
    marca: 'BMW',
    modelo: 'M8',
    anio: 2022,
    color: 'gris',
    Posicion: 0,
}
function moverse (posicion, n){
    return posicion +=n;
};

let mover = moverse (0, 10)
let moveratras = moverse (5, -23)

console.log(moveratras);
console.log(mover);

/*PROBLEMA 5*/
let ironMan = {
    nombre: 'IronMan',
    equipo: 'Avengers',
    poderes: ['Volar', 'Lanzar Misiles', 'Disparar laser'],
    energia: 100,
getpoder: function(EnergiaUsada) {
    this.energia -= EnergiaUsada;
    return "Poder Elegido de " + this.nombre + ": " + this.poderes[1] + ". Energía restante: " + this.energia + ".";
}
};
let frase = ironMan.getpoder(10)
console.log(frase);

let Hulk = {
    nombre: 'Hulk',
    equipo: 'Avengers',
    poderes: ['Aplastar', 'Gritar', 'Golpear'],
    energia: 100,
Getpoder: function(EnergiaUsada){
    this.energia -= EnergiaUsada;
    return "Poder Elegido de " + this.nombre + ": " + this.poderes [2] + ". Energia restante: " + this.energia + ".";
}
};
let frasehulk = Hulk.Getpoder(10)
console.log(frasehulk);

/*PROBLEMAS BUCLES*/

/*PROBLEMA 1*/
"A"
for (let i=0; i<5; i++) {
    console.log("Practicando con el bucle for");
}

"B"
for (let i=0; i<=10; i++) {
    console.log("La variable i tiene el valor " + i );
}

"C"
for(let i=2; i<=20; i+=2){
    console.log("Multiplos de 2 " + i);
}

for (let i=5; i<=50; i+=5){
    console.log("Multiplos de 5 " + i);
}

"D"
for(let i=100; i>=0; i--){
    console.log(i);
}

/*PROBLEMA 2*/
var base = 5;
var resultados =[];

for (let i=1; i<=10; i++){
    var resultado = base * i;
    resultados.push(resultado);
}
console.log(resultados);

/*PROBLEMA 3*/
var ganancias = [10, 15, 40, 34, 50, 70, 3, 7, 9 , 11];
var Total = 0;

for (let i=0; i < ganancias.length; i++){
    Total += ganancias[i];
}
console.log(Total);

/*PROBLEMA 4*/
let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
           ]
for (let i = 0; i < healingIsDifficult.length; i++) {
console.log(healingIsDifficult[i]);
        }    "LISTA SIN NUMEROS"

for (let i = 0; i < healingIsDifficult.length; i++) {
console.log((i+1)+ "" + healingIsDifficult[i]);
}               "LISTA CON NUMEROS"

/*PROBLEMA 5*/
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]
for (let i=0; i<got.length; i++){
    let personaje = got[i];
    console.log("Hola " + personaje.nombre + personaje.apellido + " criatura viajeral");
    console.log("Soy " + personaje.nombre + personaje.apellido + " de la ciudad " + personaje.ciudad);
}