function sumar(){
    var n1=parseInt(document.getElementById("num1").value)
    var n2=parseInt(document.getElementById("num2").value)
    var resul=n1+n2

    if (isNaN(parseInt(document.getElementById("num1").value))) {
        alert("Ingrese el valor")
        document.getElementById("num1").focus()
    }

    if (isNaN(parseInt(document.getElementById("num2").value))) {
        alert("Ingrese el valor")
        document.getElementById("num2").focus()
    }

    document.getElementById("resultado").innerHTML=resul
}


function restar(){
    var n1=parseInt(document.getElementById("num1").value)
    var n2=parseInt(document.getElementById("num2").value)
    var resul=n1-n2

    if (isNaN(parseInt(document.getElementById("num1").value))) {
        alert("Ingrese el valor")
        document.getElementById("num1").focus()
    }

    if (isNaN(parseInt(document.getElementById("num2").value))) {
        alert("Ingrese el valor")
        document.getElementById("num2").focus()
    }

    document.getElementById("resultado").innerHTML=resul
}


function multiplicar(){
    var n1=parseInt(document.getElementById("num1").value)
    var n2=parseInt(document.getElementById("num2").value)
    var resul=n1*n2

    if (isNaN(parseInt(document.getElementById("num1").value))) {
        alert("Ingrese el valor")
        document.getElementById("num1").focus()
    }

    if (isNaN(parseInt(document.getElementById("num2").value))) {
        alert("Ingrese el valor")
        document.getElementById("num2").focus()
    }

    document.getElementById("resultado").innerHTML=resul
}



function dividir(){
    var n1=parseInt(document.getElementById("num1").value)
    var n2=parseInt(document.getElementById("num2").value)
    var resul=n1/n2

    if (isNaN(parseInt(document.getElementById("num1").value))) {
        alert("Ingrese el valor")
        document.getElementById("num1").focus()
    }

    if (isNaN(parseInt(document.getElementById("num2").value))) {
        alert("Ingrese el valor")
        document.getElementById("num2").focus()
    }

    document.getElementById("resultado").innerHTML=resul
}