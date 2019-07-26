remote = require('electron').remote;

inicio = document.getElementById('navIni');
artigo = document.getElementById('navArt');
conferencia = document.getElementById('navConf');
curso = document.getElementById('navCur');
sessoes = document.getElementById('navSes');
document.getElementById('mini-cursos').style = "display: none";
document.getElementById('conferencia').style = "display: none";
document.getElementById('artigos').style = "display: none";
document.getElementById('sessoes').style = "display: none";


inicio.onclick = ()=>{
    document.getElementById('sessoes').style = "display: none";
    document.getElementById('mini-cursos').style = "display: none";
    document.getElementById('conferencia').style = "display: none";
    document.getElementById('artigos').style = "display: none";
    document.getElementById('inicio').style = "display: block";
}

artigo.onclick = ()=>{
    document.getElementById('sessoes').style = "display: none";
    document.getElementById('mini-cursos').style = "display: none";
    document.getElementById('conferencia').style = "display: none";
    document.getElementById('artigos').style = "display: block";
    document.getElementById('inicio').style = "display: none";
}

conferencia.onclick = ()=>{
    document.getElementById('sessoes').style = "display: none";
    document.getElementById('mini-cursos').style = "display: none";
    document.getElementById('conferencia').style = "display: block";
    document.getElementById('artigos').style = "display: none";
    document.getElementById('inicio').style = "display: none";
}

curso.onclick = ()=>{
    document.getElementById('sessoes').style = "display: none";
    document.getElementById('mini-cursos').style = "display: block";
    document.getElementById('conferencia').style = "display: none";
    document.getElementById('artigos').style = "display: none";
    document.getElementById('inicio').style = "display: none";
}

sessoes.onclick = ()=>{
    document.getElementById('sessoes').style = "display: block";
    document.getElementById('mini-cursos').style = "display: none";
    document.getElementById('conferencia').style = "display: none";
    document.getElementById('artigos').style = "display: none";
    document.getElementById('inicio').style = "display: none";
}

fechar = document.getElementById('fechar');
minimizar = document.getElementById('minimizar');

fechar.onclick = ()=>{remote.getCurrentWindow().close()}
minimizar.onclick = ()=>{remote.getCurrentWindow().minimize();}