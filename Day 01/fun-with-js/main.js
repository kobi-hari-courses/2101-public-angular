function max(a, b) {
    if (a > b) return a;
    return b;
}

function Person(firstName, lastName, age) {    
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.log = function () {
        console.log('Person');
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.age);   
    }
}

var p1 = new Person('John', 'Smith', 42);
var p2 = new Person('Mark', 'Zukerberg', 40);
var p3 = Person('Paul', 'McCartney', 78);

p1.log();
p2.log();

setTimeout(p1.log.bind(p1), 3000);
