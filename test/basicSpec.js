describe("basic", function(){
    it("should work", function(){
        expect(true).toBe(true);
    })
})

describe("maths", function(){
    it("should add", function(){
        var a = 2+6;
        expect(a).toBe(8);
        expect(a).not.toBe(5);
    })
})

describe("null test", function(){
    it("should null", function(){
        var b = null;
        expect(b).toBe(null);
    })
})

describe("strings", function(){
    it("should match", function(){
        var c = "Strings";
        expect(c).toBe("Strings");
    })
})