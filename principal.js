function tabuada() {
    const num = document.getElementById("numero-tabuada").value;
    if (num === "") {
        document.getElementById("tabuada").style.display = "none";
    }
    else {
        let numeros = [];

        for (let v = 1; v <= 10; v++) {
            numeros.push(`${num} x ${v} = ` + (num * v));
        }
        document.getElementById("tabuada").innerHTML = numeros.join("<br>");
    }
}

function filtro() {
    const filtro = document.getElementById("filtro-letra").value.toLowerCase();
    const lista = document.getElementsByTagName("li");

    for (const p of lista) {
        if (filtro == "") {
            p.style.fontWeight = "normal";
            p.style.display = "list-item";
        }
        else if (p.innerText.toLowerCase().includes(filtro)) {
            p.style.display = "list-item";
            p.style.fontWeight = "bold";
        }
        else {
            p.style.display = "none";
            p.style.fontWeight = "normal";
        }
    }
}