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

let batteryLevel = 0;

function getBattery() {
    if (batteryLevel == 0 ) {
        batteryLevel = 1;
        document.getElementById("batt").src = "./assets/images/batt1.PNG";
        document.getElementById("bttn_batt").src = "./assets/images/bttn_batt_1.PNG"
    } else {
        batteryLevel = 0;
        document.getElementById("batt").src = "./assets/images/batt0.PNG";
        document.getElementById("bttn_batt").src = "./assets/images/bttn_batt_0.PNG"

    }
}

let tractionLevel = 1;

function getTraction() {
    if (tractionLevel == 1 ) {
        tractionLevel = 0;
        document.getElementById("trac").src = "./assets/images/trac1.PNG";
        document.getElementById("bttn_trac").src = "./assets/images/bttn_trac_1.PNG"
    } else {
        tractionLevel = 1;
        document.getElementById("trac").src = "./assets/images/trac0.PNG";
        document.getElementById("bttn_trac").src = "./assets/images/bttn_trac_0.PNG"

    }
}

let parkingLevel = 1;

function getParking() {
    if (parkingLevel == 1 ) {
        parkingLevel = 0;
        document.getElementById("brake").src = "./assets/images/p1.PNG";
        document.getElementById("bttn_park").src = "./assets/images/bttn_park_1.PNG"
    } else {
        parkingLevel = 1;
        document.getElementById("brake").src = "./assets/images/p0.PNG";
        document.getElementById("bttn_park").src = "./assets/images/bttn_park_0.PNG"

    }
}
