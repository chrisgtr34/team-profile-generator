const Employee = require('../lib/Employee');

describe('Test the Employee Class',() => {
    it('should create a new employee', () => {
        const me = new Employee (1, 'chrisgtr34@gmail.com', 'chris');
        expect(typeof me).toBe('object');
    })
    it('set a name via constructor', () => {
        const me = new Employee (1, 'chrisgtr34@gmail.com', 'chris');
        expect(me.name).toEqual('chris');
    })
})