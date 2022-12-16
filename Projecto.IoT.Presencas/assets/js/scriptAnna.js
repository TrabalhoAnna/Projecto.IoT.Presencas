function Editar() {
    document.getElementById("btncancelaruser").style.display = "block";
    document.getElementById("btnsalvaruser").style.display = "block";
    document.getElementById("editaruser").style.display = "none";
    document.getElementById("nomeuserid").disabled = false;
    document.getElementById("emailuserid").disabled = false;
    document.getElementById("moradauserid").disabled = false;
    document.getElementById("localidadeuserid").disabled = false;
    document.getElementById("cpuserid").disabled = false;
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
    document.getElementById("editaruser").style.display = "none";
    document.getElementById("nomeuserid").disabled = true;
    document.getElementById("emailuserid").disabled = true;
    document.getElementById("moradauserid").disabled = true;
    document.getElementById("localidadeuserid").disabled = true;
    document.getElementById("cpuserid").disabled = true;
}


// Pegar modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

// Pegar Botao que abre o modal
var btn = document.getElementById("myBtn");

// pegar o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];
// Função de Abrir Modal
var data;
var btnjust;
var btnJustif;
//a= Elemento que clicou;
//b= Elemento com a data da linha que clicou
//c= Linha que clicou
//d= Elemento que ao clicar mostra o modal 2
function btnM(a, b, c, d) {
    modal.style.display = "block";//Aparece o 1 Modal
    document.getElementById("Txtmodal").innerHTML = a.textContent + "<br/><h2> Falta dia: " + b + "</h2>";//Texto do título do modal
    data = c;//Guarda a linha que clicou
    btnjust = a;//Guarda o elemento que clicou
    btnJustif = d;//Guarda o elemento que ao clicar mostra o modal 2
}

//a= Elemento que clicou;
//b= Elemento com a data da linha que clicou
//c= Ver ultima coluna da tabela(elementos escondido) 
function btnJustificado(a, b, c) {
    modal2.style.display = "block";//Aparece o 2 Modal
    document.getElementById("Txtmodal2").innerHTML = a.textContent + "<br/><h2> Falta dia: " + b + "</h2>";//Texto do título do modal
    document.getElementById("ModalJustificado").value = c.textContent;//Altera o valor da textarea colocando o conteúdo da ultima coluna da tabela(elemento escondido com o valor da justificação) 
    
}
// Ao clicar no elemento <span> fecha o modal

span.onclick = function () {
    modal.style.display = "none";
    modal2.style.display = "none";
}

// Ao clicar fora do modal fecha o modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    //Botao cancelar do Modal 1
    var canc = document.getElementById("Cancel");
    canc.onclick = function () {

        modal.style.display = "none";
    }
    //Botao OK do modal 2 que fecha o modal 2
    var BtnOk = document.getElementById("BtnOk");
    BtnOk.onclick = function () {

        modal2.style.display = "none";
    }
    //Botao Submeter do modal 1 que guardará o valor presente na textArea do 1 modal numa nova coluna escondida criada na tabela
    var subm = document.getElementById("Submit");
    subm.onclick = function () {
        var just = document.getElementById("Just");//TextArea onde está a justificação
        btnjust.style.display = "none";//Esconde o elemente que ao clicar abriu o modal 1
        btnJustif.style.display = "block";//Mostra o elemento que ao clicar faz abrir o modal 2
        modal.style.display = "none";//Esconde modal 1
        data.innerHTML += '<td style="display:none;">' + just.value + '</td>';//Cria nova coluna escondida na tabela com o valor da justificação presente na textArea do modal 1
        just.value = "";//Reseta o valor da justificação de modo quando justificar outra falta não aparecer o valor da justifucação da falta anterior
    }
}


//apresentação da disciplina seleciona no Aluno
var dispSelecAnterior;//Para guardar qual a disciplina guardade anteriormente
function Dispselect(Select) {

    var disp = document.querySelectorAll('[id=Disciplina]');//Vai buscar todos os elementos com o id=Disciplina
    var dispS = document.getElementsByClassName('DispSelect');//Vai buscar todos os elementos com o class=DispSelect
    var DiscpTab = document.getElementById(Select.textContent);//Pega o elemento com o id = ao conteudo do elemento clicado
    var DiscpTabAnterior = document.getElementById(dispSelecAnterior);//Pega o elemento com o id = ao conteudo do elemento clicado anteriormente

    if (dispS.length === 0) {//Caso nao exista um elemento com o id=DispSelect altera a classe do elemente clicado para DispSelect e mostra um novo card
        Select.className = "DispSelect";
        DiscpTab.style.display = "block";
    }
    else {//Caso já exista
        dispS[0].className = "Disp";//Altera a classe do elemento que contenha como classe=DispSelect
        DiscpTabAnterior.style.display = "none";//Escondendo o card

        for (var i = 0; i < disp.length; i++) {//Percorre todos os elementos que tenham como id=Disciplina
            if (disp[i] === Select) {//Caso o elemento Selecionado for o mesmo que o elemento a ser percorrido
                disp[i].className = "DispSelect";//Altera a Classe desse elemento para DispSelect
                DiscpTab.style.display = "block";//Mostra o card
            }
            else {//Caso o elemento Selecionado não seja o mesmo que o elemento a ser percorrido
                disp[i].className = "Disp";//Mantem a classe Disp
            }

        }

    }

    dispSelecAnterior = Select.textContent;//Salva o conteudo do elemento selecionado
}

//var dispSelecAnteriorP;
//function DispselectP(Select,Section) {

//    var disp = document.querySelectorAll('[id=DisciplinaP]');
//    var dispS = document.getElementsByClassName('DispSelectP');
//    var DiscpTab = document.getElementById(Select.children[0].textContent);
//    var DiscpTabAnterior = document.getElementById(dispSelecAnteriorP);

//    if (dispS.length === 0) {
//        Select.className = "DispSelectP";
//        DiscpTab.style.display = "block";
//        Section.style.display = "none";
//    }
//    else {
//        dispS[0].className = "DispP";
//        for (var i = 0; i < disp.length; i++) {
//            if (disp[i] === Select) {
//                disp[i].className = "DispSelectP";
//                DiscpTab.style.display = "block";
//                Section.style.display = "none";
//            }
//            else {
//                disp[i].className = "DispP";
//            }
//        }
//    }
//    dispSelecAnteriorP = Select.textContent;
//}