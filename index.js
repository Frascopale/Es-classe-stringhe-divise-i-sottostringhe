/*Esercizio 1:
Scrivere una classe StringSplitter e un main per testarla che :
contenga una proprieta' stringa toBeSplit e abbia un metodo getSplits(numberOfLetters) 
che preso un numero ritorni tutte le sottostringhe della stringa campo (toBeSplit)
esempio:
instantiatedObjectName.getSplits(2); // ci, ao, ia
e un metodo che ritorna tutte le sottostringhe in un array getAllSplits()
 (se non riuscite a prenderle tutte tutte andate oltre non ci morite dietro)
BONUS:
scrivere un metodo che prende 2 oggetti e ritorna un array con ( SUPER BONUS se tutte) le sottostringhe 
presenti in entrambe
esempio bomba bombay -> [bo, bom, bomba, om ... ecc ...] */

const prompt = require("prompt-sync")();
const StringSplitter = require ('./StringSplitter');

const stringa = new StringSplitter ("ciao");
const stringa1 = new StringSplitter ("bomy");
const stringa2 = new StringSplitter ("bomba");

let n=0;
 n = prompt ("Di quante unità vuoi le sottostringhe?");

 console.log("stai divedendo in sottostringhe da "+n);

 console.log(stringa.getSplit(n));

 console.log(stringa.getAllSplits());

 let string1 = stringa1.getAllSplits();
 let string2 = stringa2.getAllSplits();
 console.log(string1);
 console.log(string2);
 console.log(stringa1.getCompare(string1,string2));