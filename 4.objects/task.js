function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) this.marks = [mark];
  else this.marks.push(mark);
}
Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) this.marks = marks;
  else this.marks.concat(this.marks, marks);
}
Student.prototype.getAverage = function () {
  let result = this.marks.reduce(function (sum, current) {
    return sum + current;
  }) / this.marks.length;
  return result;
}
Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}