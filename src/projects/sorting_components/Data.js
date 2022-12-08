class Employee {
  constructor(id, fn, ln) {
    this.id = id;
    this.firstname = fn;
    this.lastname = ln;
  }

  toObj = () => {
    return { id: this.id, firstname: this.firstname, lastname: this.lastname };
  };

  static fromObj = (obj) => {
    return Employee(obj.id, obj.firstname, obj.lastname);
  };

  fullname = () => {
    return this.firstname + " " + this.lastname;
  };

  info = () => {
    return this.id + " " + this.firstname + " " + this.lastname;
  };
}

const _rand = () => Math.floor(Math.random() * 9999 + 1000);

const employeeData = [
  new Employee(_rand(), "Baki", "Hanma"),
  new Employee(_rand(), "Gon", "Furīkusu"),
  new Employee(_rand(), "Killua", "Zoldyck"),
  new Employee(_rand(), "Shunsui", "Kyōraku"),
];

export default employeeData;
