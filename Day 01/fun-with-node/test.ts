class Person {
    firstName: string;
    lastName: string;

    log() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}


let p1 = new Person();
p1.firstName = 'john';
p1.lastName = 'smith';

p1.log();