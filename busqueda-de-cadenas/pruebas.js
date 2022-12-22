let text = "Please locate where 'locate' occurs!";
let busqueda = text.indexOf("locate", 10)
console.log(busqueda);

let text0 = "Please locate where 'locate' occurs!";
let busqueda0 = text0.search("locate");
console.log(busqueda0);

let text1 = "The rain in SPAIN stays mainly in the plain";
let busqueda1 = text1.match(/ain/g);
console.log(busqueda1);

let text2 = "Hello world, welcome to the universe.";
let includes =text2.includes("world");
console.log(includes);

let text3 = "Hello world, welcome to the universe.";
let includes0 =text3.startsWith("Hello");
console.log(includes0);

