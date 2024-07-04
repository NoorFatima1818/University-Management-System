#!/usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";

// Create a big heading using figlet

const heading = figlet.textSync("University  Management  System", {
  horizontalLayout: "default",
  verticalLayout: "default",
});
// Print the heading in a light color
console.log(chalk.hex("#ADD8E6")(heading)); // Light blue for the heading
//Define the necessary classes

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  rollNumber: string;
  courses: string[];

  constructor(name: string, age: number, rollNumber: string) {
    super(name, age);
    this.rollNumber = rollNumber;
    this.courses = [];
  }
}

class Instructor extends Person {
  salary: number;
  courses: string[];

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
    this.courses = [];
  }
}

class Department {
  name: string;
  courses: string[];

  constructor(name: string) {
    this.name = name;
    this.courses = [];
  }
}

class UniversityManagementSystem {
  students: Student[];
  instructors: Instructor[];
  departments: Department[];

  constructor() {
    this.students = [];
    this.instructors = [];
    this.departments = [];
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  addInstructor(instructor: Instructor) {
    this.instructors.push(instructor);
  }

  addDepartment(department: Department) {
    this.departments.push(department);
  }
}

const universitySystem = new UniversityManagementSystem();

// Main function
async function main() {
  while (true) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "Add Student",
          "Add Instructor",
          "Add Department",
          "Add Course to Department",
          "Assign Instructor to Course",
          "Register Student for Course",
          "View University Data",
          "Exit",
        ],
      },
    ]);

    switch (action.action) {
      case "Add Student":
        await addStudent();
        break;
      case "Add Instructor":
        await addInstructor();
        break;
      case "Add Department":
        await addDepartment();
        break;
      case "Add Course to Department":
        await addCourseToDepartment();
        break;
      case "Assign Instructor to Course":
        await assignInstructorToCourse();
        break;
      case "Register Student for Course":
        await registerStudentForCourse();
        break;
      case "View University Data":
        viewUniversityData();
        break;
      case "Exit":
        return;
        break;
    }
  }
}

// Working functions

// adding student
async function addStudent() {
  const { name, age, rollNumber } = await inquirer.prompt([
    { type: "input", name: "name", message: "Student Name:" },
    { type: "input", name: "age", message: "Student Age:" },
    { type: "input", name: "rollNumber", message: "Student Roll Number:" },
  ]);

  const student = new Student(name, parseInt(age), rollNumber);
  universitySystem.addStudent(student);
  console.log(chalk.yellowBright(`Student ${name} added successfully!`));
}

// adding instructor
async function addInstructor() {
  const { name, age, salary } = await inquirer.prompt([
    { type: "input", name: "name", message: "Instructor Name:" },
    { type: "input", name: "age", message: "Instructor Age:" },
    { type: "input", name: "salary", message: "Instructor Salary:" },
  ]);

  const instructor = new Instructor(name, parseInt(age), parseFloat(salary));
  universitySystem.addInstructor(instructor);
  console.log(chalk.blueBright(`Instructor ${name} added successfully!`));
}

// adding department
async function addDepartment() {
  const { name } = await inquirer.prompt([
    {
      type: "list",
      choices: [
        "Computer Science",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Economics",
        "Psycology",
        "English",
        "Engineering",
      ],
      name: "name",
      message: "Department Name:",
    },
  ]);

  const department = new Department(name);
  universitySystem.addDepartment(department);
  console.log(chalk.cyanBright(`Department ${name} added successfully!`));
}

// adding course to department
async function addCourseToDepartment() {
  const { departmentName, courseName } = await inquirer.prompt([
    {
      type: "input",

      name: "departmentName",
      message: "Department Name:",
    },
    {
      type: "list",
      choices: [
        "Artificial Intelligence",
        "Machine Learning",
        "Web Development",
        "Mobile App Development",
        "Cybersecurity",
        "Number Theory",
        "Topology",
        "Mathematical Modeling",
        "Probability Theory",
        "Complex Analysis",
        "Optics",
        "Solid State Physics",
        "Nuclear Physics",
        "Particle Physics",
        "Computational Physics",
        "Biochemistry",
        "Environmental Chemistry",
        "Polymer Chemistry",
        "Medicinal Chemistry",
        "Chemical Kinetics",
        "Labor Economics",
        "Health Economics",
        "Environmental Economics",
        "Public Economics",
        "Game Theory",
        "Neuropsychology",
        "Forensic Psychology",
        "Health Psychology",
        "Educational Psychology",
        "Industrial-Organizational Psychology",
        "Creative Writing",
        "Comparative Literature",
        "Postcolonial Literature",
        "Linguistics",
        "Poetry Writing",
        "Control Systems",
        "Renewable Energy Systems",
        "Robotics",
        "Aerospace Engineering",
        "Biomedical Engineering",
      ],
      name: "courseName",
      message: "Course Name:",
    },
  ]);

  const department = universitySystem.departments.find(
    (dep) => dep.name === departmentName
  );
  if (!department) {
    console.log(chalk.redBright(`Department ${departmentName} not found!`));
    return;
  }

  department.courses.push(courseName);
  console.log(
    chalk.magentaBright(
      `Course ${courseName} added to department ${departmentName} successfully!`
    )
  );
}

// assigning instructor to course
async function assignInstructorToCourse() {
  const { courseName, instructorName } = await inquirer.prompt([
    {
      type: "list",
      choices: [
        "Artificial Intelligence",
        "Machine Learning",
        "Web Development",
        "Mobile App Development",
        "Cybersecurity",
        "Number Theory",
        "Topology",
        "Mathematical Modeling",
        "Probability Theory",
        "Complex Analysis",
        "Optics",
        "Solid State Physics",
        "Nuclear Physics",
        "Particle Physics",
        "Computational Physics",
        "Biochemistry",
        "Environmental Chemistry",
        "Polymer Chemistry",
        "Medicinal Chemistry",
        "Chemical Kinetics",
        "Labor Economics",
        "Health Economics",
        "Environmental Economics",
        "Public Economics",
        "Game Theory",
        "Neuropsychology",
        "Forensic Psychology",
        "Health Psychology",
        "Educational Psychology",
        "Industrial-Organizational Psychology",
        "Creative Writing",
        "Comparative Literature",
        "Postcolonial Literature",
        "Linguistics",
        "Poetry Writing",
        "Control Systems",
        "Renewable Energy Systems",
        "Robotics",
        "Aerospace Engineering",
        "Biomedical Engineering",
      ],
      name: "courseName",
      message: "Course Name:",
    },
    { type: "input", name: "instructorName", message: "Instructor Name:" },
  ]);

  const instructor = universitySystem.instructors.find(
    (inst) => inst.name === instructorName
  );
  if (!instructor) {
    console.log(chalk.redBright(`Instructor ${instructorName} not found!`));
    return;
  }

  instructor.courses.push(courseName);
  console.log(
    chalk.greenBright(
      `Instructor ${instructorName} assigned to course ${courseName} successfully!`
    )
  );
}

// register student for course
async function registerStudentForCourse() {
  const { courseName, studentName } = await inquirer.prompt([
    {
      type: "list",
      choices: [
        "Artificial Intelligence",
        "Machine Learning",
        "Web Development",
        "Mobile App Development",
        "Cybersecurity",
        "Number Theory",
        "Topology",
        "Mathematical Modeling",
        "Probability Theory",
        "Complex Analysis",
        "Optics",
        "Solid State Physics",
        "Nuclear Physics",
        "Particle Physics",
        "Computational Physics",
        "Biochemistry",
        "Environmental Chemistry",
        "Polymer Chemistry",
        "Medicinal Chemistry",
        "Chemical Kinetics",
        "Labor Economics",
        "Health Economics",
        "Environmental Economics",
        "Public Economics",
        "Game Theory",
        "Neuropsychology",
        "Forensic Psychology",
        "Health Psychology",
        "Educational Psychology",
        "Industrial-Organizational Psychology",
        "Creative Writing",
        "Comparative Literature",
        "Postcolonial Literature",
        "Linguistics",
        "Poetry Writing",
        "Control Systems",
        "Renewable Energy Systems",
        "Robotics",
        "Aerospace Engineering",
        "Biomedical Engineering",
      ],
      name: "courseName",
      message: "Course Name:",
    },
    { type: "input", name: "studentName", message: "Student Name:" },
  ]);

  const student = universitySystem.students.find(
    (stu) => stu.name === studentName
  );
  if (!student) {
    console.log(chalk.redBright(`Student ${studentName} not found!`));
    return;
  }

  student.courses.push(courseName);
  console.log(
    chalk.cyanBright(
      `Student ${studentName} registered for course ${courseName} successfully!`
    )
  );
}

// view university data
function viewUniversityData() {
  console.log(JSON.stringify(universitySystem, null, 2));
}

main().catch(console.error);
