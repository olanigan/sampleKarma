describe("First Angular Test", function () {
    // Arrange (set up a scenario)
    var counter1=0;

    it("increments value", function () {
        // Act (attempt the operation)
        counter1++;
        // Assert (verify the result)
        expect(counter1).toEqual(1);
    })
    it("decrements value", function () {
        // Act (attempt the operation)
        counter1--;
        // Assert (verify the result)
        expect(counter1).toEqual(0);
    })
});