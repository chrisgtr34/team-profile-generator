const Manager = require('../lib/Manager');

describe('Test the Manager Class',() => {
    it('will create a new Manager', () => {
        const me = new Manager (4, 'Christopher@gmail.com', 'Christopher', '34');
        expect(typeof me).toBe('object');
    })
    it('set a name via constructor', () => {
        const me = new Manager (4, 'Christopher@gmail.com', 'Christopher', '34');
        expect(me.name).toEqual('Christopher');
    })
    it('set a id via constructor', () => {
        const me = new Manager (4, 'Christopher@gmail.com', 'Christopher', '34');
        expect(me.id).toEqual(4);
    })
    it('set a email via constructor', () => {
        const me = new Manager (4, 'Christopher@gmail.com', 'Christopher', '34');
        expect(me.email).toEqual('Christopher@gmail.com');
    })
    it('set a officeNumber via constructor', () => {
        const me = new Manager (4, 'Christopher@gmail.com', 'Christopher', '34');
        expect(me.officeNumber).toEqual('34');
    })
    it('can obtain email via getEmail() method', () => {
        const me = new Manager (4, 'Christopher@gmail.com', 'Christopher', '34');
        expect(me.getEmail()).toEqual('Christopher@gmail.com');
    })
    it('can obtain name via getName() method', () => {
        const me = new Manager (4, 'Christopher@gmail.com', 'Christopher', '34');
        expect(me.getName()).toEqual('Christopher');
    })
    it('can obtain id via getID() method', () => {
        const me = new Manager (4, 'Christopher@gmail.com', 'Christopher', '34');
        expect(me.getId()).toEqual(4);
    })
    it('can obtain school via getOfficeNumber() method', () => {
        const me = new Manager (4, 'Christopher@gmail.com', 'Christopher', '34');
        expect(me.getOfficeNumber()).toEqual('34');
    })
    
})
