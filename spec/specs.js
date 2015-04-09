describe('convert', function() {
    // it("it accepts 0 and returns 0", function() {
    //     expect(convert('0')).to.equal(0);
    // })
    it("accepts 1 and returns 1", function() {
        expect(convert('11111')).to.equal(31);
    });

    it("accepts 01010 and returns 10", function() {
        expect(convert('010101')).to.equal(21);
    });
});
