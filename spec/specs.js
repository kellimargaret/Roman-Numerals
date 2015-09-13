describe('romanNumeral', function() {
    it("displays I for the value of 1", function() {
    expect(romanNumeral(1)).to.equal("I");
    });

    it("displays LXVI for the value of 66", function() {
        expect(romanNumeral(999)).to.equal("CMXCIX");
    });

    it("does not display a number greater than 3999", function() {
        expect(romanNumeral(4500)).to.equal("The Romans did not believe in your number!");
    });
});
