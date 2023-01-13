//import employee constructor
const Employee = require("../lib/Employee");
//create new employee object
test("Creates new employee object.", () => {
    const employee = new Employee ('Vicoria', 28, 'victoria99@gmail.com');
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
});

//to obtain employee name from getName()
test('gets employee name', () => {
    const employee = new Employee ('Vicoria', 28, 'victoria99@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

//obtains employee ID from getID()
test('gets employee ID', () => {
    const employee = new Employee ('Vicoria', 28, 'victoria99@gmail.com');
    expect(employee.getID()).toEqual(expect.any(Number));
});

//obtains employee email from getEmail()
test('gets employee email', () => {
    const employee = new Employee ('Vicoria', 28, 'victoria99@gmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

//obtains employee role from getRole()
test('gets employee role', () => {
    const employee = new Employee ('Vicoria', 28, 'victoria99@gmail.com');
    expect(employee.getRole()).toEqual(expect.any(Employee));
});