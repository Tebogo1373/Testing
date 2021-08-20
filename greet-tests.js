// describe('this test' , function(){
//     it('should show you how to use MochaJS' , function(){
//         assert.equal(2,2);

//         assert.deepEqual([2,2],[2,2]);
//     });

//     it('should show you failing MochaJS test' , function(){
//         assert.equal(2,2);

//         assert.deepEqual([2,2],[2,2]);
//     });

// });

describe('The greet fuction' , function(){

    it('should return "Hello, Tebza" when i greet Tebza' , function(){
       
        assert.equal('Hello, Tebza', greet('Tebza'));

    });

    it('should return "Hello, Dineo" when i greet Dineo' , function(){
       
        assert.equal('Hello, Dineo', greet('Dineo'));

    });
});
