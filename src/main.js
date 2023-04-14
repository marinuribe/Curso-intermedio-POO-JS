const victor = {
  name: 'Victor',
  age: '29',
  aprovedCourses: ['Curso 1'],
  addCourse(newCourse) {
    this.aprovedCourses.push(newCourse);
  },
};
console.log(Object.keys(victor));
console.log(Object.getOwnPropertyNames(victor));
console.log(Object.entries(victor));
console.log(Object.getOwnPropertyDescriptors(victor));
