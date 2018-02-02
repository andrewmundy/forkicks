const toggle = require('../..src/components/Main.vue')

describe('Toggle', () => { 
    it('should have arguments', () => { 
        let args =  ['hello','hi']
        let toggle = new Toggle(args)
        expect(toggle).toBe(2);
    })
})