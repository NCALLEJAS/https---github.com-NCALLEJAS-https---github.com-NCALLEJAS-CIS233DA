function tryLaunch(){
    var active = true;
    var msg;
    
    if (breakStatus == 0) {
        active = false;
        msg = "break is on"
    } 
    
    if (tractionStatus == 0) {
        avtive = false;
        msg = "traction is on"
    }
    
    if (batteryCharge = 1) {
        active = false;
        msg = "no battery"
    }
    
    if (gasLevel = 1) {
        active = false;
        msg = "gas is low"
    }
    
    if (shifter < 3) {
        active = false;
        msg = "not in SPORT"
    }
    
    if (!active){
        msg.innerHTML = "ERROR";
        document.getElementById("launch").src = "./assets/images/lca0.PNG"; 
        document.getElementById('sputter').src = "./assets/media/sputter.mp3";
        //change launch img to 1ca0
        //play sputter
    } else {
        msg.innerHTML = " ";
        document.getElementById("launch").src = "./assets/images/lca1.PNG";
        document.getElementById('launch').src = "./assets/media/launch.mp3";
        //clear error
        //change launch img to 1ca1
        //play launch
    }
}

