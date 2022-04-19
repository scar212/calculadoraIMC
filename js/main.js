// let peso = document.querySelector(".caja-peso");
// let altura = document.querySelector(".caja-altura");
let peso = document.getElementById("caja-peso");
let altura = document.getElementById("caja-altura");
let calcular = document.querySelector(".btn-calcular");
let respIMC = document.getElementById("texto-resp-imc");
let respClasf = document.getElementById("texto-resp-clasf");

calcular.addEventListener("click", ()=>{
    const imc = (peso.value) / Math.pow((altura.value),2);
    respIMC.innerHTML = Math.round(imc);
    document.getElementById("barra-1").style.setProperty("visibility", "hidden");
    document.getElementById("barra-2").style.setProperty("visibility", "hidden");
    document.getElementById("barra-3").style.setProperty("visibility", "hidden");
    document.getElementById("barra-4").style.setProperty("visibility", "hidden");
    document.getElementById("barra-5").style.setProperty("visibility", "hidden");
    document.getElementById("barra-6").style.setProperty("visibility", "hidden");
    const clasf = ()=>{
        if(imc >= 18.5 && imc <= 24.9){
            respClasf.innerHTML = "Normal";
            document.getElementById("barra-2").style.setProperty("visibility", "visible");
        }else if (imc >= 25 && imc <=29.9){
            respClasf.innerHTML = "Sobrepeso";
            document.getElementById("barra-3").style.setProperty("visibility", "visible");
        }else if (imc >= 30 && imc <=34.9){
            respClasf.innerHTML = "Obesidad grado I";
            document.getElementById("barra-4").style.setProperty("visibility", "visible");
        }else if (imc >= 35 && imc <=39.9){
            respClasf.innerHTML = "Obesidad grado II";
            document.getElementById("barra-5").style.setProperty("visibility", "visible");
        }else if (imc >= 40){
            respClasf.innerHTML = "Obesidad grado III";
            document.getElementById("barra-6").style.setProperty("visibility", "visible");
        }else if(imc <= 18.5){
            respClasf.innerHTML = "Bajo Peso";
            document.getElementById("barra-1").style.setProperty("visibility", "visible");
        }
    }
    clasf();
    
})


