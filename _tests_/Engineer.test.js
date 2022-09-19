const Engineer = require('../lib/Engineer');

describe('Test the Engineer Class',() => {
    it('will create a new Engineer', () => {
        const me = new Engineer (2, 'christen@gmail.com', 'christen', 'christen12');
        expect(typeof me).toBe('object');
    })
    it('set a name via constructor', () => {
        const me = new Engineer (2, 'christen@gmail.com', 'christen', 'christen12');
        expect(me.name).toEqual('christen');
    })
    it('set a id via constructor', () => {
        const me = new Engineer (2, 'christen@gmail.com', 'christen', 'christen12');
        expect(me.id).toEqual(2);
    })
    it('set a email via constructor', () => {
        const me = new Engineer (2, 'christen@gmail.com', 'christen', 'christen12');
        expect(me.email).toEqual('christen@gmail.com');
    })
    it('set a github via constructor', () => {
        const me = new Engineer (2, 'christen@gmail.com', 'christen', 'christen12');
        expect(me.github).toEqual('christen12');
    })
    it('can obtain email via getEmail() method', () => {
        const me = new Engineer (2, 'christen@gmail.com', 'christen', 'christen12');
        expect(me.getEmail()).toEqual('christen@gmail.com');
    })
    it('can obtain name via getName() method', () => {
        const me = new Engineer (2, 'christen@gmail.com', 'christen', 'christen12');
        expect(me.getName()).toEqual('christen');
    })
    it('can obtain id via getID() method', () => {
        const me = new Engineer (2, 'christen@gmail.com', 'christen', 'christen12');
        expect(me.getId()).toEqual(2);
    })
    it('can obtain github via getGitHub() method', () => {
        const me = new Engineer (2, 'christen@gmail.com', 'christen', 'christen12');
        expect(me.getGitHub()).toEqual('christen12');
    })
    
})
