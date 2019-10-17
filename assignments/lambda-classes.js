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
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor (pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName,
        this.favInstructor = pmAttr.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// Person objects
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

// Instructor objects
const Goku = new Instructor({
    name: 'Goku',
    age: '36',
    location: 'Mount Paozu',
    specialty: 'going super Saiyan',
    favLanguage: 'Python',
    catchPhrase: "Kamehameha!"
});

const Piccolo = new Instructor({
    name: 'Piccolo',
    age: '40',
    location: 'Namek',
    specialty: 'special beam cannon',
    favLanguage: 'Java',
    catchPhrase: "Fool!"
});

const MasterRoshi = new Instructor({
    name: 'Master Roshi',
    age: '100',
    location: 'Kame House',
    specialty: 'martial arts',
    favLanguage: 'Ruby',
    catchPhrase: "Yaaahhh!"
});

// Student Objects
const Gohan = new Student({
    name: 'Gohan',
    age: '18',
    location: 'Mount Paozu',
    previousBackground: 'martial arts training',
    className: 'Web26',
    favSubjects: ['HTML', 'CSS', 'math']
});

const Michelle = new Student({
    name: 'Michelle',
    age: '36',
    location: 'Arizona',
    previousBackground: 'administrative',
    className: 'Web25',
    favSubjects: ['HTML', 'CSS', 'Psychology']
});

const Oli = new Student({
    name: 'Oli',
    age: '38',
    location: 'Scotland',
    previousBackground: 'finance',
    className: 'Web25',
    favSubjects: ['Javascript', 'Ruby', 'Python']
});

// PM Objects
const King Kai = new ProjectManager({
    name: 'King Kai',
    age: '125',
    location: 'his own planet',
    specialty: 'spirit bomb',
    favLanguage: 'Ruby',
    catchPhrase: "Jokes on you!",
    gradClassName: 'Web25',
    favInstructor: 'Goku'
});



// Console logs to run tests
console.log(Mulan.speak());
console.log(Goku.demo('physics'));
console.log(Piccolo.grade(Gohan, 'math'));
console.log(Michelle.PRAssignment('JSII'));
console.log(Oli.sprintChallenge('CSS'));