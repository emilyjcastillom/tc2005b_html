console.log("Hola, mundo!");
const colores = ["azul", "rojo", "verde"];
console.log(colores[0]);
colores[2] = 22;
colores.forEach((color)=>console.log(color));

let alumno = { name: "Luis" };
alumno.edad = 20;
console.log(alumno.edad);

alumno = [];


function msg(name) { // Funcion que se pueden llamar igual, pero que cambien los parametros
    console.log("Hola " + name);
}

msg("Luis");