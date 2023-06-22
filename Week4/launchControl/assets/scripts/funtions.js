showTime();

let gasLevel = 0;

function getGas() {
    if (gasLevel == 0 ) {
        gasLevel = 1;
        document.getElementById("gas").src = "./assets/images/gas1.png";
        document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_1.PNG"
    } else {
        gasLevel = 0;
        document.getElementById("gas").src = "./assets/images/gas0.png";
        document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_0.PNG"

    }
}

let batteryCharge = 0;

function setBattery() {
    if (batteryCharge == 0 ) {
        batteryCharge = 1;
        document.getElementById("batt").src = "./assets/images/batt1.PNG";
        document.getElementById("bttn_batt").src = "./assets/images/bttn_batt_1.PNG"
    } else {
        batteryCharge = 0;
        document.getElementById("batt").src = "./assets/images/batt0.PNG";
        document.getElementById("bttn_batt").src = "./assets/images/bttn_batt_0.PNG"

    }
}

let tractionStatus = 1;

function setTraction() {
    if (tractionStatus == 1 ) {
        tractionStatus = 0;
        document.getElementById("trac").src = "./assets/images/trac1.PNG";
        document.getElementById("bttn_trac").src = "./assets/images/bttn_trac_1.PNG"
    } else {
        tractionStatus = 1;
        document.getElementById("trac").src = "./assets/images/trac0.PNG";
        document.getElementById("bttn_trac").src = "./assets/images/bttn_trac_0.PNG"

    }
}

let parkingStatus = 1;

function setParking() {
    if (parkingStatus == 1 ) {
        parkingStatus = 0;
        document.getElementById("brake").src = "./assets/images/p1.PNG";
        document.getElementById("bttn_park").src = "./assets/images/bttn_park_1.PNG"
    } else {
        parkingStatus = 1;
        document.getElementById("brake").src = "./assets/images/p0.PNG";
        document.getElementById("bttn_park").src = "./assets/images/bttn_park_0.PNG"

    }
}

let shifter = 0;
let shiftInd = document.getElementById("mode");
let shiftHandle = document.getElementById("bttn_shifter");

function setMode() {
    switch (shifter) {
        case 0:
            shifter = 1;
            shiftInd.innerHTML = "ECO PRO";
            shiftHandle.style.top = "720px";
            break; 
        case 1:
            shifter = 2;
            shiftInd.innerHTML = "COMFORT";
            shiftHandle.style.top = "740px";
            break; 
        case 2:
            shifter = 3;
            shiftInd.innerHTML = "SPORT";
            shiftHandle.style.top = "760px";
            break; 
        
        default:
            shifter = 0; 
            shiftInd.innerHTML = "PARK";
            shiftHandle.style.top = "700px";

    }
}
