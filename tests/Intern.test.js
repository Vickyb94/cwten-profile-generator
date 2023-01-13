//import intern constructor
const Intern = require('../lib/Intern');
//create an intern object
test("Creates an Intern object.", () => {
    const intern = new Intern ('Vicoria', 28, 'victoria99@gmail.com', 'UNB');
    expect(intern.school).toEqual(expect.any(String));
});

//obtain intern school from getSchool()
test('get employee school', () => {
    const intern = new Intern ('Vicoria', 28, 'victoria99@gmail.com', 'UNB');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//obtain employee role from getRole
test('gets employee role', () => {
    const intern = new Intern ('Vicoria', 28, 'victoria99@gmail.com', 'UNB');
    expect(intern.getRole()).toEqual("Intern");
});