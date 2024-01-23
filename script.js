//var, let, const

// let nume = 'daniel';
// console.log(nume);
// nume = 'Anca';
// console.log(nume);

// let  mesaj;

// mesaj ='salut'
// console.log(mesaj);

// //reguli de denumire a variabilelor
// //1. litere, cifre, _, $
// //2. numere nu pot incepe cu o cifra

// let _nume="Anca";

// let nume1='alina';

// //nume de variabila compus
// let firstName='Cristi'; //camel case
// let first_name='Daniel'; //underscore
// let FirstName='alina'; //pascal case


//CONST

// const nume='Ion';
// console.log(nume);

// nume='Petre';
// console.log(nume);


// const mesaj;
// mesaj='salut';
// console.log(nume);

// const numere=[1,2,3];
// console.log(numere);

// numere[0]=25;
// numere.push(17);
// console.log(numere);

// numere=[3,4,5]
// console.log(numere);


// const numere=[1,2,3,4];
// numere[1]=16;
// numere.push(5);
// numere.push(6);
// numere[2]=(1);
// console.log(numere);

//tipuri de date

//tipuri primitive
// //tipuri referinta


// let numar=3;  //(number)
// console.log(typeof numar);
// numar ='patru';  //string
// console.log(typeof numar);

// //string
// let nume = 'io popescu';
// nume = "andrei voicu";
// console.log(typeof nume);

// //number

// let varsta = 17; //valorile nu se pun intre ghilimele
// console.log(typeof varsta);

// //boolean
// let major = true; // nu se pun intre ghilimele;
// console.log(typeof true);

// //null
// let mesaj = null;
// console.log(typeof mesaj);

// //undefined
// let test;
// console.log(test, typeof test);

// //Symbol

// let sim = Symbol();
// console.log(typeof sim);

// tipurio referinta

// array, obiecte, functii, date calendaristice
// orice alta valoare care nu este de tip primitiv

// let numere = [1,2,3];
// console.log(typeof numere);

// let adresa ={
//     oras: 'Timisoara',
//     judet: 'Timis'
// };
// console.log(typeof adresa, adresa);



//conversia datelor in JS

// let a = '16'; // acesta este numar
// let b = 8;   //asta e string
// console.log(typeof a);
// console.log(typeof b);

// console.log(a+b);  //concatenare de siruri

// console.log(a-b); //conversie implicita de la string la numar
// console.log(a/b); //
// console.log(b-'trei')    //=Nan  = not a number;

//let val = b-'a';
//console.log(isNaN(val));


// let val = b-'3';
// console.log(isNaN(val), typeof val);


//conversii explicite
//1. conversia de la string la number
//parsInt, parsFloat, Number
// a= parseInt('8');
// b= parseFloat('2.5');  //string convertit la number
// console.log(a+b);

// let c = Number('a25');
// console.log(typeof c, c); //number, NaN

//2. conversii la tipul string
//toString, String

// let rez = String(123);
// rez = String(5,3+2)
// console.log(rez, typeof rez);

// rez = (123).toString();
// console.log(rez, typeof rez);

//3. coversii la tipul boolean

// let result = Boolean('');
// console.log(result, typeof result);

// let result = Boolean('0');
// console.log(result, typeof result);

// result = Boolean('salut');
// console.log(result)

// result = Boolean(10);
// console.log(result);


// let numar = 12.123456;
// //toFixed()
// console.log(numar.toFixed(3));

//Math
// console.log(Math.E, Math.PI);

//abs
// console.log(Math.abs(12.3),Math.abs(-6.3));

//ceil
// console.log(Math.ceil(12.15), Math.ceil(-1.89));
//floor
// console.log(Math.floor(6.89), Math.floor(-3.2));
// //exp
// console.log(Math.exp(0));
// console.log(Math.exp(1));
// //pow
// console.log(Math.pow(2,2), Math.pow(2,4));
// //sqrt
// console.log(Math.sqrt(9));

//round
// console.log(Math.round(6.33));
// console.log(Math.PI);

// //random
// let min =1, max = 10;
// console.log(Math.floor(min + Math.random()*max));
// //min, max
// console.log(Math.min(1, 5 ,6), Math.max(2,8,8));


// let nume = 'voicu';
// let prenume = 'maria';
// let numeComplet = 'voicu maria';

// console.log(nume[1]);
// nume[0] = "x";
// console.log(nume);

// //length  lungimea unui sir

// // +, += -operatori de concatenare
// console.log("lungime "+numeComplet.length);

// //indexOf()
// console.log(nume.indexOf("m")>-1);
// //substring()
// console.log(numeComplet.substring(0,5));

// console.log(numeComplet.length);
// //substr
// console.log(numeComplet.substr(2,6));
// //includes
// console.log(numeComplet.includes('vo'));
// console.log(numeComplet.includes('aria'));
// console.log(numeComplet.includes('daria'));
// //replace
// let sir = "apostrof, ghilimele tab";
// sir = sir.replace("apo","xxx");
// console.log(sir);

// //split()

// let arr = sir.split(",");
// console.log(arr);
// //trim()
// let val ="  2  "
// console.log(val, val.trim(), val.trim().length);


// let sir2 = "ghili\"mele\" in sir";
// //secvente escape
// // \', \"", \\, \n, \r, \t, \v
// console.log(sir2);


// let nume;
// nume='Maria';
// let prenume;
// prenume = 'Elena';

// var propozitie = `eu sunt ${nume} si ea este ${prenume}`;
// console.log(propozitie);


// let maria;
// maria  = 'Maria';
// let elena;
// elena = 'Elena';

// var propozitie = `sunt acasa la ${maria} si nu sunt acasa la ${elena}`;
// console.log(propozitie);


// //array
//  let numere = [1,23,4,5,6, "patru", false];
// // console.log(numere); 

// //lenght - numarul de elemente din array
// console.log(`lungime: ${numere.length}`);

// numere[0]=5;
// console.log(numere);

// numere[numere.length-1] = true;
// console.log(numere);

// for(let i=0; i < numere.length; i++){
//     console.log(numere[i]);
// }

// //push adauga elemente la sfarsitul arrayului
// numere.push(7);


// //unshift

// numere.unshift(25);
// console.log(numere);

// let num = numere.shift();
// let ultimul = numere.pop();
// console.log(numere);
// console.log(num, ultimul);

//indexOf

// let pos = numere.indexOf(2);
// console.log(numere, pos);

// //splice - scoate un element din array pe baza pozitiei
// let elementeScoase = numere.splice(1,3);
// console.log(numere, elementeScoase);

// //join()

// let arr = ['unu', 'doi', 'trei'];
// console.log(arr);
// let sir = arr.join(",")
// console.log(sir);

// //reverse 
// arr.reverse();
// console.log(arr);

let data = new Date();
console.log(data, typeof data);
let data2 = Date();

console.log(data2, typeof data2);

let data3 = new Date(2021, 2, 15);
console.log(data3, typeof data3);
console.log(Date.now());

console.log(Date.parse(data2));
console.log(Date.parse('1986-12-21 12:12:12'));

let data4 = new Date('2020-8-11 10:35:27');
//anul
console.log(data4.getFullYear());
//luna
console.log(data4.getMonth());
//ziua
console.log(data4.getDay());
console.log(data4.getDate());

data4.setDate(25);
console.log(data4.getDate( ));

console.log(data4.toLocaleDateString());
console.log(data4.toLocaleTimeString());
let diff = data3-data4;
console.log(diff/(1000*60*60*24*365));

