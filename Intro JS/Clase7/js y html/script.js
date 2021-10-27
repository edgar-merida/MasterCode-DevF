function mensaje() {
    alert("Hola mundo");
    let elemento = document.getElementById("body");
    elemento.style.backgroundColor = "black";
    //otra forma document.body.style.backgroundColor = "black";
    let caja = document.getElementsByClassName("caja")[0];
    caja.style.backgroundImage = "url(https://campus.devf.la/static/media/logo-devf-white.0e9942b3.svg)";
}