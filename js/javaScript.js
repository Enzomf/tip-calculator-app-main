
var conta

window.r

function onChangeBill() {
    conta = document.getElementById("bill").value
}

var gorgeta

function tip(percent) {



    gorgeta = percent

    switch (percent) {
        case 0.05:
            document.getElementById("5").className = "ativo"
            document.getElementById("10").className = "buttonTip"
            document.getElementById("15").className = "buttonTip"
            document.getElementById("25").className = "buttonTip"
            document.getElementById("50").className = "buttonTip"
            document.getElementById("customTip").value = null


            break

        case 0.1:
            document.getElementById("5").className = "buttonTip"
            document.getElementById("10").className = "ativo"
            document.getElementById("15").className = "buttonTip"
            document.getElementById("25").className = "buttonTip"
            document.getElementById("50").className = "buttonTip"
            break

        case 0.15:
            document.getElementById("5").className = "buttonTip"
            document.getElementById("10").className = "buttonTip"
            document.getElementById("15").className = "ativo"
            document.getElementById("25").className = "buttonTip"
            document.getElementById("50").className = "buttonTip"
            break

        case 0.25:
            document.getElementById("5").className = "buttonTip"
            document.getElementById("10").className = "buttonTip"
            document.getElementById("15").className = "buttonTip"
            document.getElementById("25").className = "ativo"
            document.getElementById("50").className = "buttonTip"
            break

        case 0.50:
            document.getElementById("5").className = "buttonTip"
            document.getElementById("10").className = "buttonTip"
            document.getElementById("15").className = "buttonTip"
            document.getElementById("25").className = "buttonTip"
            document.getElementById("50").className = "ativo"
            break
    }


}


function calc() {

    if (personCount == 0 || conta == null || conta == undefined || conta ==0) {
        document.getElementById("TotalTip").innerHTML = "------"
        document.getElementById("TotalValue").innerHTML = "------"
    } else {

        let tip = (conta * gorgeta) / personCount

        Math.round(tip)

        document.getElementById("TotalTip").innerHTML = "$" + tip

        let num = parseFloat(tip)
        let x = parseFloat(conta)

        let total = (conta/personCount)+tip

        document.getElementById("TotalValue").innerHTML = "$" + total
    }

}



function custom() {
    var custo = document.getElementById("customTip").value

    localStorage.setItem("tipP", custo / 100)

    if (custo != undefined) {
        gorgeta = custo
      
        document.getElementById("5").className = "buttonTip"
        document.getElementById("10").className = "buttonTip"
        document.getElementById("15").className = "buttonTip"
        document.getElementById("25").className = "buttonTip"
        document.getElementById("50").className = "buttonTip"
    }
}


var personCount  = 1

function people() {
     personCount = parseFloat(document.getElementById("nPeople").value) 
  
 
  

    if (personCount == 0) {
        console.log("Ai não em ")
        document.getElementById("zero").style.display = "inline"
        document.getElementById("nPeople").style.border = "red solid 1px"
    } else {

        document.getElementById("zero").style.display = "none"
        document.getElementById("nPeople").style.border = "none"
    }

}


function reset(){
    document.getElementById("nPeople").value = 1
    document.getElementById("bill").value = null
    document.getElementById("customTip").value = null


    document.getElementById("5").className = "buttonTip"
    document.getElementById("10").className = "buttonTip"
    document.getElementById("15").className = "buttonTip"
    document.getElementById("25").className = "buttonTip"
    document.getElementById("50").className = "buttonTip"

    document.getElementById("TotalTip").innerHTML = "$0.00" 
    document.getElementById("TotalValue").innerHTML = "$0.00" 
}
