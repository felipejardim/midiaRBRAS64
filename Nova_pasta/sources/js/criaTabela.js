const shell = require('electron').shell;
const path = require('path');
const $ = jQuery = require('jquery');
const excessoes = ['ST4.pdf','ST11.pdf']

//jQuery que obtem os artigos
$.getJSON("sources/json/artigos.json", (result)=>{
  lista = result;
}).then(()=>{
  let tabela = document.getElementById('tabela-artigos');
  lista.forEach(item => {
    tabela.innerHTML += `<tr> <td id="titulo">${item.TITULO}</td> <td id="autor">${item.AUTORES}</td> <td class="links"><a href="javascript:abrirArquivo('Artigos/${item.ID} - RESUMO.pdf')" ><span class="fas fa-file-pdf" style="display:inline"></span>&nbspResumo</a></td><td class="links"><a href="javascript:abrirArquivo('Artigos/${item.ID} - ABSTRACT.pdf')" ><span class="fas fa-file-pdf" style="display:inline"></span>&nbspAbstract</a></td><td class="links">${item.REVISTA == 'NAO'?`<a href=javascript:abrirArquivo('Artigos/${item.ID}.pdf')><span class="fas fa-file-pdf" style="display:inline"></span>&nbspArtigo</a>`:""}</td>  <td style="display:none">${item.Modalidade}</td></tr>`
  }); 
  
})

//jQuery que obtem as conferencias
$.getJSON("sources/json/conferencias.json", (result)=>{
  lista1 = result;
}).then(()=>{
  let tabela = document.getElementById('tabela-conferencias');
  lista1.forEach(item => {
    tabela.innerHTML += `<tr> <td id="titulo"><a href="javascript:abrirArquivo('Conferencias/${item.Arquivo}')">${item.Título}</a></td> <td id="autor">${item.Conferencista}</td> </tr>`
  }); 
  
})

//jQuery que obtem os minicursos
$.getJSON("sources/json/minicursos.json", (result)=>{
  lista2 = result;
}).then(()=>{
  let tabela = document.getElementById('tabela-minicursos');
  lista2.forEach(item => {
    tabela.innerHTML += `<tr> <td id="titulo"><a href="javascript:abrirArquivo('Minicursos/${item.Arquivo}')">${item.Título}</a></td> <td id="autor">${item.Conferencista}</td> </tr>`
  }); 
})

//jQuery que obtem as sessões
$.getJSON("sources/json/sessoes.json", (result)=>{
  lista3 = result;
}).then(()=>{
  let tabela = document.getElementById('tabela-sessoes');
  lista3.forEach(item => {
    tabela.innerHTML += `<tr> <td id="titulo"><a href="javascript:abrirArquivo('Sessões/${item.Arquivo}','${item.Arquivo}')" ${excessoes.includes(item.Arquivo)?" class='desabilitado' title='Este arquivo infelizmente está indisponível'":""}>${item.Título}</a></td> <td id="autor">${item.Conferencista}</td> </tr>`
  }); 
})

function abrirArquivo(nome, item){
  if(excessoes.includes(item)){
    return null;
  }else{

    try {
      //shell.openItem(path.join(__dirname, '../ARQUIVOS/'+nome))
      shell.openItem(path.join(process.env.PORTABLE_EXECUTABLE_DIR,'/ARQUIVOS/'+nome))
    } 
    catch (error) {
      console.log("erro ao abrir arquivo "+error)
    }
  }
}

/**jQuery para pesquisa */
$(document).ready(function(){
  $("#pesquisa").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tabela-artigos tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

/**jQuery para modalidade */
$(document).ready(function(){
  $("#modalidade").on("change", function() {
    var value = $(this).val().toLowerCase() == "todas as modalidades"?"":$(this).val().toLowerCase();
    $("#tabela-artigos tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
