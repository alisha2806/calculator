/*
Created by Alisha Sharma*/

describe("getData", function(){
    it("should get all the data", function(){
        expect(exp = 3 + 3 ).toEqual(6);
    });
});

describe("inputValidation", function() {
    it("add correctly", function() {
        expect(eval(2 + 3 )).toEqual(5);
    });

    it("subtract correctly", function() {
        expect(eval(2 - 3 )).toEqual(-1);
    });

    it("divided correctly", function(){
        expect (eval(2 / 3 )).toEqual(0.6666666666666666);
    });

    it("divided by 0 gives infite", function(){
        expect (eval(2 / 0 )).toEqual(Infinity);
    });

});

describe("clearAll", function(){
    it("should clear all the data", function(){
        expect(exp).toEqual(6);
    });

});

