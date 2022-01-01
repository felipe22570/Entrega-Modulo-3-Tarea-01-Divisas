function validar(){
    var cantidad = document.getElementById("valor").value;

    if (cantidad == ""){
        danger = document.getElementById("danger");
        danger.style.display = "block";
        document.getElementById("valor").value = "";
        document.getElementById("danger").innerHTML= "Por favor ingrese una cantidad.";
    }else{
        convertir();
    }
}

function convertir(){
    var cantidad = parseFloat(document.getElementById("valor").value);

    var one = document.getElementById("inputOne").value;
    var two = document.getElementById("inputTwo").value;

    danger = document.getElementById("danger");
    success = document.getElementById('success');

    var dolar = 1;
    var pesoCol = 4000;
    var pesoMex = 20.6;
    var euro = 0.88;
    var libra = 0.75;

    var monedas = ["Elige tu moneda", dolar, pesoMex, pesoCol, euro, libra];

    var resultado = 0;

    if (one == two){
        success.style.display = "none";
        danger.style.display = "block";
        document.getElementById("valor").value = "";
        document.getElementById("danger").innerHTML= "Por favor elija dos valores diferentes."
    }else if (one==monedas[0] || two==monedas[0]){
        success.style.display = "none";
        danger.style.display = "block";
        document.getElementById("danger").innerHTML= "Por favor elija una moneda válida."
    }else{
        resultado = (cantidad * monedas[two]) / monedas[one];
        danger.style.display = "none";
        success.style.display = "block";
        document.getElementById("valor").value = "";
        document.getElementById("success").innerHTML="El resultado es: " + resultado.toFixed(2);
    }

}