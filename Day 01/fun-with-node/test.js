var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.log = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    return Person;
}());
var p1 = new Person();
p1.firstName = 'john';
p1.lastName = 'smith';
p1.log();
