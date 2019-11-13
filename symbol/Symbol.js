const idSym = Symbol('id'); // Symbol is used as an identifier for object properties
let user = {
    id : 5412,
    name: 'Hazrat',
    age: 36,
    [idSym] : 65465321313156
}
// Symbols were originally that they will allow for the private properties

// like so this property will not be shown
console.log(Object.getOwnPropertyNames(user));

// so now symbol will be shown so they are not hidden forever
console.log(Object.getOwnPropertySymbols(user));

// As Symbol is always giving a unique value
const sym1 = Symbol('cat');
const sym2 = Symbol('cat');
console.log(sym1 === sym2); // will display false

// As Symbols giving you the unique value but that's not always the case
const symbol1 = Symbol.for("cow");
const symbol2 = Symbol.for("cow");

console.log(symbol1 === symbol2); // will display true

// So When we do Symbol.for means I want a global symbol so that we can then 
// reference the SYmbol for cow latter on, may be in a different iframe
// so they are shared across iframe so that we can the communicate or shared Symbols

// Let see a usecase for Symbols

// const RED = 'red';
// const ORANGE = 'orange';
// const YELLOW = 'yellow';
// const BLUE = 'blue';
// const cow = 'yellow';

// I can pass any value with these color names and it will work
// so it means that the above color strings are not unique, lets use Symbol with above

const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
const cow = 'yellow';

// now these are unique so now if I pass cow so it will display default value

function getAlertLevel(color){
    switch (color) {
        case RED:
            return 'severe';
        case ORANGE:
            return 'high';
        case YELLOW:
            return 'elevated'; 
        case BLUE:
            return 'low'; 
        default:
            console.log("I DON'T KNOW THAT ALERT!");               
    }
}



/// Next example is that how we can use Symbol to store meta Data
const length = Symbol('length');

class Truck {
    constructor() {
        this[length] = 0;
    }

    add(car, contents) {
        this[car] = contents;
        this[length]++
    }
}

let frightTruck = new Truck();
frightTruck.add('refrigerator car', 'cattle');
frightTruck.add('flat car', 'aircraft parts');
frightTruck.add('tank car', 'milk');
frightTruck.add('hopper car', 'coal');

// after adding meta data on frightTruck Object so when we loop through
// now the length property will not be displayed
for (car in frightTruck){
    console.log(car, frightTruck[car]);
}

/// See Another Example, to use symbol to prevent clashes or collisions

class AlertService {
    constructor() {
        this.alerts = {};
    }

    addAlert(symbol, alertText) {
        this.alerts[symbol] = alertText;
        this.renderAlerts();
    }

    removeAlert(symbol) {
        delete this.alerts[symbol];
    }

    renderAlerts() {}
}

const alertService = new AlertService();

class MyComponent {
    constructor(thing) {
        this.componentid = Symbol(thing);
    }

    errorHandler(msg) {
        alertService.addAlert(this.componentid, msg);
        setTimeout(() => {
            alertService.removeAlert(this.componentid);
            console.log('Removed alert', this.componentid);
        }, 5000);
    }
}

let list = new MyComponent('listComponent');
let list2 = new MyComponent('listComponent');
let form = new MyComponent('inputComponent');

list.errorHandler('list problem');
list2.errorHandler('list2 problem');