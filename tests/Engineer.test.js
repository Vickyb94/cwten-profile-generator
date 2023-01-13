//import engineer constructor
const Engineer = require('../lib/Engineer');
//create engineer object
test('Creates Engineer object', () => {
    const engineer = new Engineer('Vicoria', 28, 'victoria99@gmail.com', 'vicky99');
    expect(engineer.github).toEqual(expect.any(String));
});

//obtain employee github username from getGithub()
test('get employee github username', () => {
    const engineer = new Engineer('Vicoria', 28, 'victoria99@gmail.com', 'vicky99');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//obtain engineer role from getRole
test('gets employee role', () => {
    const employee = new Employee ('Vicoria', 28, 'victoria99@gmail.com', 'vicky99');
    expect(engineer.getRole()).toEqual("Engineer");
});
