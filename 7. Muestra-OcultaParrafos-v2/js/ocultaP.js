function muestraOculta(id) {
    var elemento = document.getElementById('contenidos_'+id);
    var enlace = document.getElementById('enlace_'+id);
    switch(id){
        //case '1': document.getElementById('div_1').style="background: #F2E4C9;";break;
        case '1': document.getElementById('div_1').style="background-color: rgba(248, 220, 184, 0.705);";break;
        case '2': document.getElementById('div_2').style="background-color: rgba(239, 248, 184, 0.836);";break;
        case '3': document.getElementById('div_3').style="background-color: rgba(184, 248, 243, 0.712);";break;
    }
    if(elemento.style.display == "" || elemento.style.display == "block") {
      elemento.style.display = "none";
      enlace.innerHTML = 'Mostrar contenidos';
    }
    else {
      elemento.style.display = "block";
      enlace.innerHTML = 'Ocultar contenidos';
    }
}
