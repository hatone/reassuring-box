if (!("Counter" in this)) {
    DEBUGGER = 6;
	
	CURRENCY1 = 59;
	CURRENCY2 = 61;
	ALCOHOL = 63;
	GAS = 65;

    LOW = 0;
    HIGH = 1;
    
    gpio.init([CURRENCY1, CURRENCY2, ALCOHOL, GAS, DEBUGGER], "input");
    
    Break = false;
    State = 1;
    Counter = 0;

}

var change = 0;
var states = gpio.read([CURRENCY1, CURRENCY2, ALCOHOL, GAS, DEBUGGER]);

if (states[""+DEBUGGER] === LOW || Break) {
    debugger;
    Break = false;
}

if (states[""+CURRENCY1] === LOW) {
    State = 1;
    change = CURRENCY1;
}

if (states[""+CURRENCY2] === LOW) {
    State = 1;
    change = CURRENCY2;
}

if (states[""+ALCOHOL] === LOW) {
    State = 1;
    change = ALCOHOL;
}

//if (states[""+GAS] === LOW) {
//    State = 1;
//    change = GAS;
//}

result = {
count: ++Counter,
state: State,
change: change,
};