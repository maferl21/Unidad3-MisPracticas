function validaFechaMenor(campo){
    var bRet = false;
    var dHoy = new Date();
    var dCapt = "";
    if (campo.value == null)
    alert("Faltan datos");
    else{
        dCapt = validaFecha(campo.value);
        if (dCapt != null && dCapt < dHoy)
            bRet = true;
        else{
            //alertmsj('Error!','La fecha debe ser menor a la fecha actual','erro');
            alert("La fecha debe ser menor a la fecha actual");
            borrarDiv();
        }
    }
    return bRet;
}

function validaFecha(valor){
    var dConvertida = null;
    var sAnio = "";
    var sMes = "";
    var sDia = "";
    var nAnio=0, nMes=0, nDia = 0;
    if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
        nDia = parseInt(valor.substring(8), 10);
        nMes = parseInt(valor.substring(5,7), 10);
        nAnio = parseInt(valor.substring(0,4), 10);
        if (nDia <1 || nDia>31)
            alert("El día no es válido")
        else{
            if (nMes <1 || nMes>12)
                alert("El mes no es válido");
            else{
                if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 || nMes==8 || nMes==10 || nMes==12) && nDia > 31)
                    alert("El mes tiene máximo 31 días");
                else if ((nMes==4 || nMes==6 || nMes==9 || nMes==11) && nDia > 30)
                    alert("El mes tiene máximo 30 días");
                else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
                    alert("Febrero tiene 28 días o 29 en bisiesto");
                else{
                    dConvertida = new Date();
                    dConvertida.setFullYear(nAnio, nMes, nDia);
                }//fin validaci�n día-mes
            }//mes válido
        }//día válido
        creasigno(nDia,nMes);
    }//formato válido
    else{
        alert("No tiene formato de fecha");
    }
    return dConvertida;
}

    
function creasigno(nDia, nMes) {
    var newDiv = document.createElement("div");
    //document.body.removeChild(newDiv);
    var newContent=" ";
    var imagen1 = new Image(600, 300);
    var n = 0;
    var f = 0;
    console.log("lo que tiene f inicio metodo = "+f);
    if ((nDia >= 21) && (nMes == 3) || (nDia <= 19) && (nMes == 4)) {
        newContent = document.createTextNode("SIGNO ARIES");
        f = 1;
    }
    else if ((nDia >= 20) && (nMes == 4) || (nDia <= 20) && (nMes == 5)) {
        newContent = document.createTextNode("SIGNO TAURO");
        f = 2;
    }
    else if ((nDia >= 20) && (nMes == 5) || (nDia <= 20) && (nMes == 6)) {
        newContent = document.createTextNode("SIGNO GEMINIS");
        f = 3;
    }
    else if ((nDia >= 20) && (nMes == 6) || (nDia <= 22) && (nMes == 7)) {
        newContent = document.createTextNode("SIGNO CANCER");
        f = 4;
    }
    else if ((nDia >= 22) && (nMes == 7) || (nDia <= 23) && (nMes == 8)) {
        newContent = document.createTextNode("SIGNO LEO");
        f = 5;
    }
    else if ((nDia >= 23) && (nMes == 8) || (nDia <= 22) && (nMes == 9)) {
        newContent = document.createTextNode("SIGNO VIRGO");
        f = 6;
    }
    else if ((nDia >= 22) && (nMes == 9) || (nDia <= 22) && (nMes == 10)) {
        newContent = document.createTextNode("SIGNO LIBRA");
        f = 7;
    }
    else if ((nDia >= 23) && (nMes == 10) || (nDia <= 21) && (nMes == 11)) {
        newContent = document.createTextNode("SIGNO ESCORPIO");
        f = 8;
    }
    else if ((nDia >= 22) && (nMes == 11) || (nDia <= 21) && (nMes == 12)) {
        newContent = document.createTextNode("SIGNO SAGITARIO");
        f = 9;
    }
    else if ((nDia >= 22) && (nMes == 12) || (nDia <= 19) && (nMes == 1)) {
        newContent = document.createTextNode("SIGNO CAPRICORNIO");
        f = 10;
    }
    else if ((nDia >= 20) && (nMes == 1) || (nDia <= 19) && (nMes == 2)) {
        newContent = document.createTextNode("SIGNO ACUARIO");
        f = 11;
    }
    else if ((nDia >= 20) && (nMes == 2) || (nDia <= 20) && (nMes == 3)) {
        newContent = document.createTextNode("SIGNO PICIS");
        f = 12;
    }
    borrarDiv();
        var currentDiv = document.getElementById("div");
        //var newContent = document.createTextNode("SIGNO");
        newDiv.appendChild(newContent); //añade texto al div creado.
        // añade el elemento creado y su contenido al DOM
        document.body.insertBefore(newDiv, currentDiv);
        //document.body.removeChild(newContent);
        //document.body.replaceChild(newDiv, currentDiv);
        imagen1.src = 'img/' + f + '.jpg';
        newDiv.appendChild(imagen1);
        newDiv.style = "border: 15px solid white; background-color:#9E04F0; text-align:center; font-family:georgia; font-size: 170%; width: 600px ;height:335px; margin:auto";
}
function borrarDiv(){
    //La mayoría de los navegadores devuelven un objeto NodeList para el método querySelectorAll().
    //El siguiente código selecciona todos los <div> nodos de un documento:
    var myNodeList = document.querySelectorAll("div");
    //console.log("Tiene div - "+myNodeList.length);
    for(var i=myNodeList.length-1; i>-1 ; i--)
            myNodeList[i].parentNode.removeChild(myNodeList[i]);
            //console.log("Tiene div - "+myNoeList.length);
    
}