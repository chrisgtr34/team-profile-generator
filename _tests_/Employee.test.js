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
    it('set a id via constructor', () => {
        const me = new Employee (1, 'chrisgtr34@gmail.com', 'chris');
        expect(me.id).toEqual(1);
    })
    it('set a email via constructor', () => {
        const me = new Employee (1, 'chrisgtr34@gmail.com', 'chris');
        expect(me.email).toEqual('chrisgtr34@gmail.com');
    })
    it('can obtain email via getEmail() method', () => {
        const me = new Employee (1, 'chrisgtr34@gmail.com', 'chris');
        expect(me.getEmail()).toEqual('chrisgtr34@gmail.com');
    })
    it('can obtain name via getName() method', () => {
        const me = new Employee (1, 'chrisgtr34@gmail.com', 'chris');
        expect(me.getName()).toEqual('chris');
    })
    it('can obtain id via getID() method', () => {
        const me = new Employee (1, 'chrisgtr34@gmail.com', 'chris');
        expect(me.getId()).toEqual(1);
    })
    it('can obtain role via getRole() method', () => {
        const me = new Employee (1, 'chrisgtr34@gmail.com', 'chris');
        expect(me.getRole()).toEqual('Employee');
    })
    
})
