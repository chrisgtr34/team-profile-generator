const Intern = require('../lib/Intern');

describe('Test the Intern Class',() => {
    it('will create a new Intern', () => {
        const me = new Intern (3, 'christian@gmail.com', 'christian', 'UCLA');
        expect(typeof me).toBe('object');
    })
    it('set a name via constructor', () => {
        const me = new Intern (3, 'christian@gmail.com', 'christian', 'UCLA');
        expect(me.name).toEqual('christian');
    })
    it('set a id via constructor', () => {
        const me = new Intern (3, 'christian@gmail.com', 'christian', 'UCLA');
        expect(me.id).toEqual(3);
    })
    it('set a email via constructor', () => {
        const me = new Intern (3, 'christian@gmail.com', 'christian', 'UCLA');
        expect(me.email).toEqual('christian@gmail.com');
    })
    it('set a school via constructor', () => {
        const me = new Intern (3, 'christian@gmail.com', 'christian', 'UCLA');
        expect(me.school).toEqual('UCLA');
    })
    it('can obtain email via getEmail() method', () => {
        const me = new Intern (3, 'christian@gmail.com', 'christian', 'UCLA');
        expect(me.getEmail()).toEqual('christian@gmail.com');
    })
    it('can obtain name via getName() method', () => {
        const me = new Intern (3, 'christian@gmail.com', 'christian', 'UCLA');
        expect(me.getName()).toEqual('christian');
    })
    it('can obtain id via getID() method', () => {
        const me = new Intern (3, 'christian@gmail.com', 'christian', 'UCLA');
        expect(me.getId()).toEqual(3);
    })
    it('can obtain school via getSchool() method', () => {
        const me = new Intern (3, 'christian@gmail.com', 'christian', 'UCLA');
        expect(me.getSchool()).toEqual('UCLA');
    })
    
})
