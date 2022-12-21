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
var modal3 = document.getElementById("myModal3");

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
    if (c.textContent === "View") {
        document.getElementById("ModalJustificado").value ="Não há Justificativa";
    } else {
        document.getElementById("ModalJustificado").value = c.textContent;//Altera o valor da textarea colocando o conteúdo da ultima coluna da tabela(elemento escondido com o valor da justificação) 
    }
    
}
function BtnVerJustProff(a, b) {
    document.getElementById("myModal3").style.display = "block";//Aparece o 2 Modal
    document.getElementById("Txtmodal3").innerHTML = a.textContent + "<br/><h2> Falta dia: " + b + "</h2>";//Texto do título do modal
    if (a.textContent === "View") {
        document.getElementById("ModalJustificado").value = "Não há Justificativa";
    } else {
        document.getElementById("ModalJustificado").value = c.textContent;//Altera o valor da textarea colocando o conteúdo da ultima coluna da tabela(elemento escondido com o valor da justificação) 
    }
}
// Ao clicar no elemento <span> fecha o modal

span.onclick = function () {
    modal.style.display = "none";
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
function ok() {

    document.getElementById("myModal3").style.display = "none";
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

var TrmTabAnterior;//Para guardar qual a disciplina guardade anteriormente

function TrmSelect(Select) {

    var Trm = document.querySelectorAll('[id=Turma]');//Vai buscar todos os elementos com o id=Disciplina

    var TrmS = document.getElementsByClassName('DispSelect');//Vai buscar todos os elementos com o class=DispSelect

    var TrmTab = document.getElementById(Select.textContent);//Pega o elemento com o id = ao conteudo do elemento clicado

    var TrmTabAnteriorV = document.getElementById(TrmTabAnterior);//Pega o elemento com o id = ao conteudo do elemento clicado anteriormente
    

    if (TrmS.length === 1) {//Caso nao exista um elemento com o id=DispSelect altera a classe do elemente clicado para DispSelect e mostra um novo card
        Select.className = "DispSelect";
        TrmTab.style.display = "block";
    }
    else {//Caso já exista

        TrmS[1].className = "Disp";//Altera a classe do elemento que contenha como classe=DispSelect
        TrmTabAnteriorV.style.display = "none";//Escondendo o card

        for (var i = 0; i < Trm.length; i++) {//Percorre todos os elementos que tenham como id=Disciplina

            if (Trm[i] === Select) {//Caso o elemento Selecionado for o mesmo que o elemento a ser percorrido
                Trm[i].className = "DispSelect";//Altera a Classe desse elemento para DispSelect
                TrmTab.style.display = "block";//Mostra o card
            }
            else {//Caso o elemento Selecionado não seja o mesmo que o elemento a ser percorrido
                Trm[i].className = "Disp";//Mantem a classe Disp
            }

        }

    }

    TrmTabAnterior = Select.textContent;//Salva o conteudo do elemento selecionado
}


function cursos() {//Cria cards para cada Curso que haja

    var disp = document.querySelectorAll('[id=Disciplina]');//Vai buscar todos os elementos com o id=Disciplina
    var card = document.getElementById("CardsSelect");
    for (var i = 0; i < disp.length; i++) {
        //Percorre todos os elementos que tenham como id=Disciplina
        card.innerHTML += '<div id="' + disp[i].textContent + '" class="col-xl-5" style="display:none;"><!--begin::List Widget 6--><div class="card card-xl-stretch mb-xl-8"><!--begin::Header--><div class="card-header border-0 pt-5"><h3 class="card-title align-items-start flex-column"><span class="card-label fw-bolder text-dark">' + disp[i].textContent + '--> Turmas</span></h3></div><!--end::Header--><!--begin::Body--><div class="card-body pt-6"><!--begin::Item--><div class="d-flex flex-stack"><!--begin::Section--><div class="d-flex align-items-center flex-row-fluid flex-wrap"><!--begin:Author--><div class="flex-grow-1 me-2"><a id="Turma" class="Disp text-muted" onclick="TrmSelect(this)">PWDAM 1º Ano(' + (i + 1) + ')</a></div><!--end:Author--><!--begin::Actions--><a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"><!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg--><span class="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"></rect><path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"></path></svg></span><!--end::Svg Icon--></a><!--begin::Actions--></div><!--end::Section--></div><!--end::Item--><!--begin::Separator--><div class="separator separator-dashed my-4"></div><!--end::Separator--><!--begin::Item--><div class="d-flex flex-stack "><!--begin::Section--><div class="d-flex align-items-center flex-row-fluid flex-wrap"><!--begin:Author--><div class="flex-grow-1 me-2"><a id="Turma" class="Disp text-muted" onclick="TrmSelect(this)">PWDAM 2º Ano(' + (i + 1) +')</a></div><!--end:Author--><!--begin::Actions--><a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"><!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg--><span class="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"></rect><path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"></path></svg></span><!--end::Svg Icon--></a><!--begin::Actions--></div><!--end::Section--></div><!--end::Item--><!--begin::Separator--><div class="separator separator-dashed my-4"></div><!--end::Separator--></div><!--end::Body--></div><!--end::List Widget 6-- ></div > ';
        
    }

    var Trm = document.querySelectorAll('[id=Turma]');//Vai buscar todos os elementos com o id=Disciplina
    for (var i = 0; i < Trm.length; i++) {
        //Percorre todos os elementos que tenham como id=Disciplina
        card.innerHTML += '<!--begin::Tables Widget 13--><div id = "' + Trm[i].textContent + '" class="card mb-5 mb-xl-8" style="display:none"><!--begin::Card header--><div class="card-header mt-5"><!--begin::Card title--><div class="card-title flex-column"><h3 class="fw-bolder mb-1">' + Trm[i].textContent + '</h3></div><!--begin::Card title--><!--begin::Card toolbar--> <div class="card-toolbar my-1"><div class="card-body"><div class="m-0" data-select2-id="select2-data-121-4cxf"><!--begin::Menu toggle--><a href="#" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder show menu-dropdown" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"><!--begin::Svg Icon | path: icons/duotune/general/gen031.svg--><span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor"></path></svg></span><!--end::Svg Icon-->Filtro</a><!--end::Menu toggle--><!--begin::Menu 1--><div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_6244765b2b786" style="z-index: 105; position: fixed; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-115px, 110px, 0px);" data-popper-placement="bottom-end" data-select2-id="select2-data-kt_menu_6244765b2b786"><!--begin::Header--><div class="px-7 py-5"><div class="fs-5 text-dark fw-bolder">Opções de Filtro</div></div><!--end::Header--><!--begin::Menu separator--><div class="separator border-gray-200"></div><!--end::Menu separator--><!--begin::Form--><div class="px-7 py-5"><!--begin::Input group--><div class="mb-10" data-select2-id="select2-data-120-ubyz"><!--begin::Label--><label class="form-label fw-bold">Trimestre</label><!--end::Label--><!--begin::Input--><select name="trimestre" aria-label="Selecione o trimestre" data-control="select2" data-placeholder="Selecione o trimestre..." class="form-select form-select-solid form-select-lg"><option value="">Selecione o trimestre...</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select><!--end::Input--></div><!--end::Input group--><!--begin::Input group--><div class="mb-10" data-select2-id="select2-data-120-ubyz"><!--begin::Label--><label class="form-label fw-bold">Dias</label><!--end::Label--><!--begin::Input--><select name="Dias" aria-label="Selecione o dia" data-control="select2" data-placeholder="Selecione o dia..." class="form-select form-select-solid form-select-lg"><option value="">Selecione o dia...</option><option value="1">10/09</option><option value="2">20/01</option><option value="3">01/04</option></select><!--end::Input--></div><!--end::Input group--><!--begin::Actions--><div class="d-flex justify-content-end"><button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Cancelar</button><button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Aplicar</button></div><!--end::Actions--></div><!--end::Form--></div><!--end::Menu 1--></div></div></div>                         <!--begin::Card toolbar--></div><!--end::Card header-- >< !--begin:: Body-- ><div class="card-body py-3"><!--begin::Table container--><div class="table-responsive"><!--begin::Table--><table id="kt_profile_overview_table" class="table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder dataTable no-footer"><!--begin::Head--><thead class="fs-7 text-gray-400 text-uppercase"><tr><th class="min-w-250px sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Aluno: activate to sort column ascending" style="width: 410.925px;">Aluno</th><th class="min-w-150px sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Data: activate to sort column ascending" style="width: 252.825px;">Data</th><th class="min-w-90px sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 168.3px;">Presença</th><th class="min-w-50px text-end sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Details: activate to sort column ascending" style="width: 110.45px;">Justificativa</th></tr></thead><!--end::Head--><!--begin::Body--><tbody class="fs-6"><tr class="even"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle">   <span class="symbol-label bg-light-danger text-danger fw-bold">A</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">Anna Almada</a><div class="fw-bold text-gray-400">202200746</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-11-10T00:00:00+00:00">12/12/2022</td><td><span class="badge badge-light-success fw-bolder px-4 py-3">Presente</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr><tr class="even"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle">   <span class="symbol-label bg-light-warning text-warning fw-bold">J</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">João Barbas</a><div class="fw-bold text-gray-400">202200755</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-05-05T00:00:00+01:00">12/12/2022</td><td><span class="badge badge-light-danger fw-bolder px-4 py-3">Falta</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr><tr class="even"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle">   <span class="symbol-label bg-light-danger text-danger fw-bold">D</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">Denis Afanasii</a><div class="fw-bold text-gray-400">202200750</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-08-19T00:00:00+01:00">12/12/2022</td><td><span class="badge badge-light-success fw-bolder px-4 py-3">Presente</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr><tr class="odd"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle"><span class="symbol-label bg-light-primary text-primary fw-bold">N</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">Beatris Souza</a><div class="fw-bold text-gray-400">202100780</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-11-10T00:00:00+00:00">12/12/2022</td><td><span class="badge badge-light-success fw-bolder px-4 py-3">Presente</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr></tbody><!--end::Body--></table><!--end::Table--></div><!--end::Table container--><div class="row"><div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"><div class="dataTables_length" id="kt_profile_overview_table_length"><label><select name="kt_profile_overview_table_length" aria-controls="kt_profile_overview_table" class="form-select form-select-sm form-select-solid"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div><div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"><div class="dataTables_paginate paging_simple_numbers" id="kt_profile_overview_table_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="kt_profile_overview_table_previous"><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="0" tabindex="0" class="page-link"><i class="previous"></i></a></li><li class="paginate_button page-item active"><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="2" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="3" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item next" id="kt_profile_overview_table_next"><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="4" tabindex="0" class="page-link"><i class="next"></i></a></li></ul></div></div></div></div><!--begin:: Body-- ></div ><!--end::Tables Widget 13--> ';
       
    }

    
}


var TabelaAnterior;
var turmaSelect;
function SelectFiltro(cardSelect) {
    var selectCurso = document.getElementById("SelectCurso");
    var CardCursoSelect = document.getElementById("CursoCoordenador");


    var selectDisp = document.getElementById("SelectDisp");
    var CardDispSelect = document.getElementById("DispCoordenador");

    var selectTrm = document.getElementById("SelectTrm");
    var CardTrmSelect = document.getElementById("TrmCoordenador");


    if (cardSelect === CardCursoSelect) {
        if (selectCurso.textContent === "") {
            alert("Escolha um Curso");
            CardDispSelect.style.display = "none";
        }
        else {
            CardDispSelect.style.display = "block";
        }
    }
    if (cardSelect === CardDispSelect) {
        if (selectCurso.textContent === "") {
            alert("Escolha uma Disciplina");
            CardTrmSelect.style.display = "none";
        }
        else {
            CardTrmSelect.style.display = "block";
        }
    }
    if (cardSelect === CardTrmSelect) {
        if (selectTrm.textContent === "") {
            alert("Escolha uma Turma");
        }
        else {
            TabelaAnterior = document.getElementById(selectTrm.textContent);
            turmaSelect = selectTrm.textContent;
            document.getElementById("pesquisaCoord").style.display = "block";
        ////    document.getElementById(TabelaAnterior).style.display = "none";
        //    var turmas = querySelectorAll('[name=turmasC]');
        //    alert("ola")
        //    for (let i = 0; i < turmas; i++) {

        //        if (TrmSelect.textContent == turmas[i].textContent) {
        //            var CountCard = querySelectorAll(turmas[i].textContent);
        //            if (CountCard === 0) {
        //                document.getElementById("kt_content_container").innerHTML += '<!--begin::Tables Widget 13--><div id = "' + turmas[i].textContent + '" class="card mb-5 mb-xl-8" style="display:none"><!--begin::Card header--><div class="card-header mt-5"><!--begin::Card title--><div class="card-title flex-column"><h3 class="fw-bolder mb-1">' + turmas[i].textContent + '</h3></div><!--begin::Card title--><!--begin::Card toolbar-->                   <div class="card-toolbar my-1"><div class="card-body"><div class="m-0" data-select2-id="select2-data-121-4cxf"><!--begin::Menu toggle--><a class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder show menu-dropdown" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"><!--begin::Svg Icon | path: icons/duotune/general/gen031.svg--><span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor"></path></svg></span><!--end::Svg Icon-->Filtro</a><!--end::Menu toggle--><!--begin::Menu 1--><div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_6244765b2b786" style="z-index: 105; position: fixed; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-115px, 110px, 0px);" data-popper-placement="bottom-end" data-select2-id="select2-data-kt_menu_6244765b2b786"><!--begin::Header--><div class="px-7 py-5"><div class="fs-5 text-dark fw-bolder">Opções de Filtro</div></div><!--end::Header--><!--begin::Menu separator--><div class="separator border-gray-200"></div><!--end::Menu separator--><!--begin::Form--><div class="px-7 py-5"><!--begin::Input group--><div class="mb-10" data-select2-id="select2-data-120-ubyz"><!--begin::Label--><label class="form-label fw-bold">Trimestre</label><!--end::Label--><!--begin::Input--><select name="trimestre" aria-label="Selecione o trimestre" data-control="select2" data-placeholder="Selecione o trimestre..." class="form-select form-select-solid form-select-lg"><option value="">Selecione o trimestre...</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select><!--end::Input--></div><!--end::Input group--><!--begin::Input group--><div class="mb-10" data-select2-id="select2-data-120-ubyz"><!--begin::Label--><label class="form-label fw-bold">Dias</label><!--end::Label--><!--begin::Input--><select name="Dias" aria-label="Selecione o dia" data-control="select2" data-placeholder="Selecione o dia..." class="form-select form-select-solid form-select-lg"><option value="">Selecione o dia...</option><option value="1">10/09</option><option value="2">20/01</option><option value="3">01/04</option></select><!--end::Input--></div><!--end::Input group--><!--begin::Actions--><div class="d-flex justify-content-end"><button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Cancelar</button><button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Aplicar</button></div><!--end::Actions--></div><!--end::Form--></div><!--end::Menu 1--></div></div></div>                <!--begin::Card toolbar--></div><!--end::Card header-- >< !--begin:: Body-- ><div class="card-body py-3"><!--begin::Table container--><div class="table-responsive"><!--begin::Table--><table id="kt_profile_overview_table" class="table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder dataTable no-footer"><!--begin::Head--><thead class="fs-7 text-gray-400 text-uppercase"><tr><th class="min-w-250px sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Aluno: activate to sort column ascending" style="width: 410.925px;">Aluno</th><th class="min-w-150px sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Data: activate to sort column ascending" style="width: 252.825px;">Data</th><th class="min-w-90px sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 168.3px;">Presença</th><th class="min-w-50px text-end sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Details: activate to sort column ascending" style="width: 110.45px;">Justificativa</th></tr></thead><!--end::Head--><!--begin::Body--><tbody class="fs-6"><tr class="even"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle">   <span class="symbol-label bg-light-danger text-danger fw-bold">A</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">Anna Almada</a><div class="fw-bold text-gray-400">202200746</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-11-10T00:00:00+00:00">12/12/2022</td><td><span class="badge badge-light-success fw-bolder px-4 py-3">Presente</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr><tr class="even"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle">   <span class="symbol-label bg-light-warning text-warning fw-bold">J</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">João Barbas</a><div class="fw-bold text-gray-400">202200755</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-05-05T00:00:00+01:00">12/12/2022</td><td><span class="badge badge-light-danger fw-bolder px-4 py-3">Falta</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr><tr class="even"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle">   <span class="symbol-label bg-light-danger text-danger fw-bold">D</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">Denis Afanasii</a><div class="fw-bold text-gray-400">202200750</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-08-19T00:00:00+01:00">12/12/2022</td><td><span class="badge badge-light-success fw-bolder px-4 py-3">Presente</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr><tr class="odd"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle"><span class="symbol-label bg-light-primary text-primary fw-bold">N</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">Beatris Souza</a><div class="fw-bold text-gray-400">202100780</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-11-10T00:00:00+00:00">12/12/2022</td><td><span class="badge badge-light-success fw-bolder px-4 py-3">Presente</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr></tbody><!--end::Body--></table><!--end::Table--></div><!--end::Table container--><div class="row"><div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"><div class="dataTables_length" id="kt_profile_overview_table_length"><label><select name="kt_profile_overview_table_length" aria-controls="kt_profile_overview_table" class="form-select form-select-sm form-select-solid"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div><div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"><div class="dataTables_paginate paging_simple_numbers" id="kt_profile_overview_table_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="kt_profile_overview_table_previous"><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="0" tabindex="0" class="page-link"><i class="previous"></i></a></li><li class="paginate_button page-item active"><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="2" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="3" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item next" id="kt_profile_overview_table_next"><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="4" tabindex="0" class="page-link"><i class="next"></i></a></li></ul></div></div></div></div><!--begin:: Body-- ></div ><!--end::Tables Widget 13--> ';

        //                document.getElementById(turmas[i].textContent).style.display = "block";
        //                TabelaAnterior = document.getElementById(turmas[i].textContent).id;
        //            } else {

        //                document.getElementById(turmas[i].textContent).style.display = "block";
        //                TabelaAnterior = document.getElementById(turmas[i].textContent).id;
        //            }
        //        }
        //    }

        }
    }
    
}

function BtnPesq() {
    alert("ola")
    var TrmC = document.querySelectorAll('[name=turmasC]');//Vai buscar todos os elementos com o id=Disciplina
    
    for (var i = 0; i < TrmC.length; i++) {
        //Percorre todos os elementos que tenham como id=Disciplina
        document.getElementById("kt_content_container").innerHTML += '<!--begin::Tables Widget 13--><div id = "' + TrmC[i].textContent + '" class="card mb-5 mb-xl-8" style="display:none"><!--begin::Card header--><div class="card-header mt-5"><!--begin::Card title--><div class="card-title flex-column"><h3 class="fw-bolder mb-1">' + TrmC[i].textContent + '</h3></div><!--begin::Card title--><!--begin::Card toolbar--><div class="card-toolbar my-1"><div class="card-body"><div class="m-0" data-select2-id="select2-data-121-4cxf"><!--begin::Menu toggle--><a href="#" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder show menu-dropdown" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"><!--begin::Svg Icon | path: icons/duotune/general/gen031.svg--><span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor"></path></svg></span><!--end::Svg Icon-->Filtro</a><!--end::Menu toggle--><!--begin::Menu 1--><div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_6244765b2b786" style="z-index: 105; position: fixed; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-115px, 110px, 0px);" data-popper-placement="bottom-end" data-select2-id="select2-data-kt_menu_6244765b2b786"><!--begin::Header--><div class="px-7 py-5"><div class="fs-5 text-dark fw-bolder">Opções de Filtro</div></div><!--end::Header--><!--begin::Menu separator--><div class="separator border-gray-200"></div><!--end::Menu separator--><!--begin::Form--><div class="px-7 py-5"><!--begin::Input group--><div class="mb-10" data-select2-id="select2-data-120-ubyz"><!--begin::Label--><label class="form-label fw-bold">Trimestre</label><!--end::Label--><!--begin::Input--><select name="trimestre" aria-label="Selecione o trimestre" data-control="select2" data-placeholder="Selecione o trimestre..." class="form-select form-select-solid form-select-lg"><option value="">Selecione o trimestre...</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select><!--end::Input--></div><!--end::Input group--><!--begin::Input group--><div class="mb-10" data-select2-id="select2-data-120-ubyz"><!--begin::Label--><label class="form-label fw-bold">Dias</label><!--end::Label--><!--begin::Input--><select name="Dias" aria-label="Selecione o dia" data-control="select2" data-placeholder="Selecione o dia..." class="form-select form-select-solid form-select-lg"><option value="">Selecione o dia...</option><option value="1">10/09</option><option value="2">20/01</option><option value="3">01/04</option></select><!--end::Input--></div><!--end::Input group--><!--begin::Actions--><div class="d-flex justify-content-end"><button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Cancelar</button><button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Aplicar</button></div><!--end::Actions--></div><!--end::Form--></div><!--end::Menu 1--></div></div></div><!--begin::Card toolbar--></div><!--end::Card header-- >< !--begin:: Body-- ><div class="card-body py-3"><!--begin::Table container--><div class="table-responsive"><!--begin::Table--><table id="kt_profile_overview_table" class="table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder dataTable no-footer"><!--begin::Head--><thead class="fs-7 text-gray-400 text-uppercase"><tr><th class="min-w-250px sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Aluno: activate to sort column ascending" style="width: 410.925px;">Aluno</th><th class="min-w-150px sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Data: activate to sort column ascending" style="width: 252.825px;">Data</th><th class="min-w-90px sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 168.3px;">Presença</th><th class="min-w-50px text-end sorting" tabindex="0" aria-controls="kt_profile_overview_table" rowspan="1" colspan="1" aria-label="Details: activate to sort column ascending" style="width: 110.45px;">Justificativa</th></tr></thead><!--end::Head--><!--begin::Body--><tbody class="fs-6"><tr class="even"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle">   <span class="symbol-label bg-light-danger text-danger fw-bold">A</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">Anna Almada</a><div class="fw-bold text-gray-400">202200746</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-11-10T00:00:00+00:00">12/12/2022</td><td><span class="badge badge-light-success fw-bolder px-4 py-3">Presente</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr><tr class="even"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle">   <span class="symbol-label bg-light-warning text-warning fw-bold">J</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">João Barbas</a><div class="fw-bold text-gray-400">202200755</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-05-05T00:00:00+01:00">12/12/2022</td><td><span class="badge badge-light-danger fw-bolder px-4 py-3">Falta</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr><tr class="even"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle">   <span class="symbol-label bg-light-danger text-danger fw-bold">D</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">Denis Afanasii</a><div class="fw-bold text-gray-400">202200750</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-08-19T00:00:00+01:00">12/12/2022</td><td><span class="badge badge-light-success fw-bolder px-4 py-3">Presente</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr><tr class="odd"><td><!--begin::User--><div class="d-flex align-items-center"><!--begin::Wrapper--><div class="me-5 position-relative"><!--begin::Avatar--><div class="symbol symbol-35px symbol-circle"><span class="symbol-label bg-light-primary text-primary fw-bold">N</span></div><!--end::Avatar--><!--begin::Online--><div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div><!--end::Online--></div><!--end::Wrapper--><!--begin::Info--><div class="d-flex flex-column justify-content-center"><a href="" class="fs-6 text-gray-800 text-hover-primary">Beatris Souza</a><div class="fw-bold text-gray-400">202100780</div></div><!--end::Info--></div><!--end::User--></td><td data-order="2022-11-10T00:00:00+00:00">12/12/2022</td><td><span class="badge badge-light-success fw-bolder px-4 py-3">Presente</span></td><td class="text-end"><a class="btn btn-light btn-sm" onclick="BtnVerJustProff(this, this.parentElement.parentElement.children[1].textContent)">View</a></td></tr></tbody><!--end::Body--></table><!--end::Table--></div><!--end::Table container--><div class="row"><div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"><div class="dataTables_length" id="kt_profile_overview_table_length"><label><select name="kt_profile_overview_table_length" aria-controls="kt_profile_overview_table" class="form-select form-select-sm form-select-solid"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div><div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"><div class="dataTables_paginate paging_simple_numbers" id="kt_profile_overview_table_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="kt_profile_overview_table_previous"><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="0" tabindex="0" class="page-link"><i class="previous"></i></a></li><li class="paginate_button page-item active"><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="2" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="3" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item next" id="kt_profile_overview_table_next"><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="4" tabindex="0" class="page-link"><i class="next"></i></a></li></ul></div></div></div></div><!--begin:: Body-- ></div ><!--end::Tables Widget 13--> ';
        alert("ola")
    }
    TabelaAnterior.style.display = "none";
    document.getElementById(turmaSelect).style.display = "block"; alert("ola")
}