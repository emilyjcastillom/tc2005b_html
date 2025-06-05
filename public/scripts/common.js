window.onload = () => {
    if (sessionStorage.id) {
        const link = document.getElementById("linkGame");
        link.setAttribute("href", "./game/index.html?id=" + sessionStorage.id);
    } else {
        window.location = "../index.html";
    }
};

const link = document.getElementById("linkGame");
link.setAttribute("href", "./game/index.html?id=" + sessionStorage.id);

const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
    sessionStorage.clear();
    window.location = "../index.html";
});