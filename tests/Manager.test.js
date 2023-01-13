const Manager = require('../lib/Manager');
//create manager object
test('Creates a Manager object', () => {
    const manager = new Manager('Vicoria', 28, 'victoria99@gmail.com', 5);
    expect(manager.officeNumber).toEqual(expect.any(Number));   
});

//obtain manager role from getRole
test('gets employee role', () => {
    const manager = new Manager ('Vicoria', 28, 'victoria99@gmail.com', 5);
    expect(manager.getRole()).toEqual("Manager");
});
