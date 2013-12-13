describe("dateHelper.js", function () {
    it("should return the date in format yyyy-mm-dd", function () {
        var date = new Date("2013-12-24T08:00:00");
        expect(date.yyyymmdd()).toBe("2013-12-24");
    });
});