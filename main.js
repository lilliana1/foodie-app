//js de escoger entre even o separado el bill

let billDecisionEven = function () {
    if (document.getElementById("even").checked = true) {
        document.getElementById("evenBill").style.display = "block";
        document.getElementById("ticket").style.display = "none";
        document.getElementById("radioButtonSelection").style.display = "none";
    }

}
let billDecisionSeparate = function () {
    if (document.getElementById("separate").checked = true) {
        document.getElementById("ticket").style.display = "block";
        document.getElementById("evenBill").style.display = "none";
        document.getElementById("radioButtonSelection").style.display = "none";
    }

}

