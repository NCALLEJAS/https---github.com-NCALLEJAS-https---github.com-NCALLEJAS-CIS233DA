function tryLaunch(){
    var one = true;
    var msg;
    
    if (breakStatus == 0) {
        one = false;
        msg = "break is on"
    } 
    
    if (tractionStatus == 0) {
        one = false;
        msg = "traction is on"
    }
    
    if (batteryCharge = 1) {
        one = false;
        msg = "battery is on"
    
    }
    
    if (gasLevel = 1) {
        one = false;
        msg = "gas is low"
    
    }
    
    if (shifter < 3) {
        one = false;
        msg = "traction is on"
    
    }
    
    if (!one){
        //display error 
        launchControl = 0
    }
}

