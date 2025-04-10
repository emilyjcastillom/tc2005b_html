// console.log("Hola desde Javascript");
// alert("mensaje");
// prompt("Ingresa tu nombre");
// confirm("deseas eliminar?");

const boton = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

const login = () => {
    const user = username.value;
    if (user == "Emily Castillo") {
        sessionStorage.setItem("name", "Emily Castillo");
        window.location.href = "pages/profile.html";
    } else {
        alert("Por favor ingresa usuario y contraseña validos.");
    }
};
boton.addEventListener("click", login);


