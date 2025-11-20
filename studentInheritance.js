// studentInheritance.js

function Person(name) {
  this.name = name;
}

Person.prototype.showName = function() {
  console.log("Name:", this.name);
};

function Student(name, branch) {
  Person.call(this, name);  // inherit properties
  this.branch = branch;
}

// Inherit prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
  console.log("Branch:", this.branch);
};

const st = new Student("Aakarsh", "CSE");

st.showName();
st.showBranch();
