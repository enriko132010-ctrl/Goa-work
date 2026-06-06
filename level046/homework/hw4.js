class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    passed() {
        if (this.score > 70) {
            return "This student passed the test";
        }

        return "This student did not pass the test";
    }
}

const student1 = new Student("Nino", 85);
const student2 = new Student("Gio", 50);
const student3 = new Student("Luka", 72);

console.log(student1.passed());
console.log(student2.passed());
console.log(student3.passed());