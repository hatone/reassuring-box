if (!("Init" in this)) {
    DEBUGGER = 6;
	
	CURRENCY1 = 51;
	CURRENCY2 = 53;
	ALCOHOL = 59;
	GAS = 61;

    LOW = 0;
    HIGH = 1;
    
    gpio.init([CURRENCY1, CURRENCY2, ALCOHOL, GAS, DEBUGGER], "input");
    
    Break = false;
    State = 1;
    Counter = 0;

}

var change = 0;
var message = [];
var states = gpio.read([CURRENCY1, CURRENCY2, ALCOHOL, GAS, DEBUGGER]);

if (states[""+DEBUGGER] === LOW || Break) {
    debugger;
    Break = false;
}

if (states[""+CURRENCY1] === LOW) {
    State = 1;
    change = CURRENCY1;
    message.push("CUR1");
}

if (states[""+CURRENCY2] === LOW) {
    State = 1;
    change = CURRENCY2;
   	message.push("CUR2");
}

if (states[""+ALCOHOL] === LOW) {
    State = 1;
    change = ALCOHOL;
    message.push("ALCOHOL");
}

if (states[""+GAS] === LOW) {
    State = 1;
    change = GAS;
   	message.push("GAS");
}

result = {
count: ++Counter,
state: State,
change: change,
message: message
};