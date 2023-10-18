function converte(){
    var temperaturainicial = Number(document.getElementById("campo").value)
    var resultado = 0
    if(document.getElementById("cf").checked){
     resultado = (temperaturainicial * 1.8) +32
    }
    else if(document.getElementById("fc").checked){
     resultado = (temperaturainicial -32) * (5/9)
    }
    else if(document.getElementById("kc").checked){
     resultado = (temperaturainicial -273.15)
    }
    else if(document.getElementById("ck").checked){
     resultado = (temperaturainicial +273.15)
    }
    else if(document.getElementById("kf").checked){
     resultado = (temperaturainicial -273.15) * (9/5) +32
    }
    else if(document.getElementById("fk").checked){
     resultado = (temperaturainicial-32)*(5/9)+273.15
    }
    else{
     resultado = "você precisa celecionar uma opção!"
     alert(resultado)
    }
 
    document.getElementById("r").innerHTML = resultado
    //fazer as demais else if com suas respectivas fórmulas
 
 }