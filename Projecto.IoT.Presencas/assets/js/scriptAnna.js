function Editar() {
    document.getElementById("btncancelaruser").style.display = "block";
    document.getElementById("btnsalvaruser").style.display = "block";
    document.getElementById("editaruser").style.display = "none";
}

function SalvarEdicao() {
    document.getElementById("btncancelaruser").style.display = "none";
    document.getElementById("btnsalvaruser").style.display = "none";
    document.getElementById("editaruser").style.display = "block";
}

function CancelarEdicao() {
    document.getElementById("btncancelaruser").style.display = "none";
    document.getElementById("btnsalvaruser").style.display = "none";
    document.getElementById("editaruser").style.display = "block";
}