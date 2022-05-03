
class Person {
    constructor (name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise () {
        console.log(`*eye of the tiger starts playing*`);
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.age} year old ${this.job}`);
    }
}

let person1 = new Person ('Jared', 'Team Leader', 33);

person1.exercise();
person1.fetchJob();


class Programmer extends Person {
    constructor (name, job, age, languages) {
        super(name, job, age);
        this.lang = languages;
        this.busy = true;
    }

    completeTask () {
        if (this.busy === true) {
            this.busy = false;
        }
    }

    acceptNewTask () {
        if (this.busy === false) {
            this.busy = true;
        }
    }

    offerNewTask () {
        if (this.busy == true) {
            console.log(`${this.name} cannot accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility`);
        }
    }
}

// my code works without this so im not entirely sure why its reccomended to do this
Programmer.prototype = Object.create(Person.prototype)

Programmer.prototype.learnLanguage = function () {
    console.log(`${this.name} is now proficent in ${this.lang}.`)
}

Programmer.prototype.listLanguages = function () {
    const knownLangs = ['HTML', 'CSS', 'JavaScript'];
     if (this.lang) {
        knownLangs.push(this.lang);
        console.log(knownLangs);
    }
}

let worker1 = new Programmer ('Bellul', 'Web Developer', 23, 'Python');

let worker2 = new Programmer ('Amy', 'Senior Tech Leader', 27, 'SQL');

let worker3 = new Programmer ('Adriana', 'Intern at Google', 19, 'React');

worker1.fetchJob();
worker1.completeTask();
worker1.offerNewTask();
worker1.learnLanguage();
worker1.listLanguages();

worker2.fetchJob();
worker2.acceptNewTask();
worker2.offerNewTask();
worker2.learnLanguage();
worker2.listLanguages();

worker3.fetchJob();
worker3.completeTask();
worker3.offerNewTask();
worker3.learnLanguage();
worker3.listLanguages();