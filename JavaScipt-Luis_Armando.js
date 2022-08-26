function CalculoIMC(){
    var alt = document.getElementById("altura");
    var peso = document.getElementById("peso");
    var imc = peso/(alt*alt); // alt** 2 calcula altura ao QUADRADO
    var result = imc;
    if(imc<18.5){
        document.getElementById("desc").value="Você esta a baixo do peso";
        document.getElementById("result").innerHTML = result;
    }else if( imc>18.6 || imc<24.9){
        document.getElementById("desc").value="Você esta no peso";
        document.getElementById("result").innerHTML = result;
    }else{
        document.getElementById("desc").value="Você esta acima do peso";
        document.getElementById("result").innerHTML = result;
        
    }
}