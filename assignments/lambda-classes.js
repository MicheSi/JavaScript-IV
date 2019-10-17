// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(insAttr){
        super(insAttr);
        this.specialty = insAttr.specialty,
        this.favLanguage = insAttr.favLanguage,
        this.catchPhrase = insAttr.catchPhrase
        }
        demo(subject){
            return `Today we are learning about ${subject}`;
        }
        grade(student, subject){
            return `${student.name} receives a perfect score on ${subject}`;
        }
}

class Student extends Person {
    constructor(studAttr){
        super(studAttr);
        this.previousBackground = studAttr.previousBackground,
        this.className = studAttr.className,
        this.favSubjects = studAttr.favSubjects
    }
    listsSubjects(){
        return favSubjects;
    }
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(){
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

const Lilo = new Person({
    name: 'Lilo',
    age: 26,
    location: 'Hawaii'
});

const Mulan = new Person({
    name: 'Mulan',
    age: 19,
    location: 'China'
});

const Ariel = new Person ({
    name: 'Ariel',
    age: 20,
    location: 'Under the Sea'
});

const Goku = new Instructor({
    name: 'Goku',
    age: '36',
    location: 'Mount Paozu',
    specialty: 'going super Saiyan',
    favLanguage: 'Python',
    catchPhrase: "Kamehameha!"
});

const Piccolo = new Instructor({

})

console.log(Mulan.speak());
console.log(Goku.demo('physics'));
console.log(Goku.grade('Gohan', 'math'));