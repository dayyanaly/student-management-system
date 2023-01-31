class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
;
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        return this.courses.push(course);
    }
}
;
class Instructor extends Person {
    courses = [];
    assignCourse(course) {
        return this.courses.push(course);
    }
}
;
class Course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
;
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
;
const student1 = new Student("Dayyan", 21, "259534");
const student2 = new Student("Ali", 24, "545978");
const instructor1 = new Instructor("Zeeshan", 40);
const instructor2 = new Instructor("Zia", 60);
const course1 = new Course("Course 1", "solidity");
const course2 = new Course("Course 2", "python");
const depart1 = new Department("Bcc");
const depart2 = new Department("Ai");
course1.addStudent(student1);
course2.addStudent(student1);
course2.addStudent(student2);
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
depart1.addCourse(course1);
depart1.addCourse(course2);
depart2.addCourse(course2);
console.log(depart1);
console.log(depart2);
export {};
