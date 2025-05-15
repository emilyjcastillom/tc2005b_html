// console.log("Hola desde Javascript");
// alert("mensaje");
// prompt("Ingresa tu nombre");
// confirm("deseas eliminar?");

const boton = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

const login = async () => {
    // validar credenciales
    const credentials = {username: username.value, password: password.value};
    const data = await fetch("http://localhost:2700/login", {
        method: "POST",
        headers:{"content-type": "application/json" }, 
        body: JSON.stringify(credentials),
    })
    const res = await data.json();
    // console.log(username.value + " " + password.value);
    // si es login correcto
    if (res.isLogin === true){
        sessionStorage.setItem("name", res.user.name);
        sessionStorage.setItem("id", res.user.id);
        window.location = "./pages/profile.html";
    } else{
        // si el login es incorrecto
        alert("Credenciales Incorrectas");
    }
};
boton.addEventListener("click", login);


