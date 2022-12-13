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


// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
var data;
var btnjust;
var btnJustif;
function btnM(a, b, c, d) {
    modal.style.display = "block";
    document.getElementById("Txtmodal").innerHTML = a.textContent + "<br/><h2> Falta dia: " + b + "</h2>";
    data = c;
    btnjust = a;
    btnJustif = d;
}

function btnJustificado(a, b, c) {
    modal2.style.display = "block";
    document.getElementById("Txtmodal2").innerHTML = a.textContent + "<br/><h2> Falta dia: " + b + "</h2>";
    document.getElementById("ModalJustificado").value = c.textContent;
    btnJust = c;
}
// When the user clicks on <span> (x), close the modal

span.onclick = function () {
    modal.style.display = "none";
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var canc = document.getElementById("Cancel");
    canc.onclick = function () {

        modal.style.display = "none";
    }
    var BtnOk = document.getElementById("BtnOk");
    BtnOk.onclick = function () {

        modal2.style.display = "none";
    }
    var subm = document.getElementById("Submit");
    subm.onclick = function () {
        var just = document.getElementById("Just");
        btnjust.style.display = "none";
        btnJustif.style.display = "block";
        modal.style.display = "none";
        data.innerHTML += '<td style="display:none;">' + just.value + '</td>';
        just.value = "";
        modal.style.display = "none";
    }
}
var dispSelecAnterior;
function Dispselect(Select) {

    var disp = document.querySelectorAll('[id=Disciplina]');
    var dispS = document.getElementsByClassName('DispSelect');
    var DiscpTab = document.getElementById(Select.textContent);
    var DiscpTabAnterior = document.getElementById(dispSelecAnterior);
    if (dispS.length === 0) {
        Select.className = "DispSelect";
        DiscpTab.style.display = "block";
    }
    else {
        dispS[0].className = "Disp";
        DiscpTabAnterior.style.display = "none";
        for (var i = 0; i < disp.length; i++) {
            if (disp[i] === Select) {
                disp[i].className = "DispSelect";
                DiscpTab.style.display = "block";
            }
            else {
                disp[i].className = "Disp";
            }

        }

    }

    dispSelecAnterior = Select.textContent;
}

var dispSelecAnteriorP;
function DispselectP(Select) {

    var disp = document.querySelectorAll('[id=DisciplinaP]');
    var dispS = document.getElementsByClassName('DispSelectP');
    var DiscpTab = document.getElementById(Select.textContent);
    var DiscpTabAnterior = document.getElementById(dispSelecAnteriorP);
    if (dispS.length === 0) {
        Select.className = "DispSelectP";
        DiscpTab.style.display = "block";
    }
    else {
        dispS[0].className = "DispP";
        DiscpTabAnterior.style.display = "none";
        for (var i = 0; i < disp.length; i++) {
            if (disp[i] === Select) {
                disp[i].className = "DispSelectP";
                DiscpTab.style.display = "block";
            }
            else {
                disp[i].className = "DispP";
            }

        }

    }

    dispSelecAnteriorP = Select.textContent;
}