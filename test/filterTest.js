/**
 * Created by Ibn Yahya on 18/06/2015.
 */
describe("Filter test", function () {

    var filter1;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($filter) {
        filter1 = $filter("labelCase");
    }));

    it("reverse case", function () {
        var res = filter1("two", true);
        expect(res).toBe("tWO");
    })

    it("change case", function () {
        var res = filter1("two by two");
        expect(res).toEqual("Two by two");
    })

    it("does both", function () {
        var res = filter1("nOOn Today");
        expect(res).toEqual("Noon today");
        res = filter1(res, true);
        expect(res).toEqual("nOON TODAy");
    })

})