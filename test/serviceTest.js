/**
 * Created by Ibn Yahya on 18/06/2015.
 */
describe("Service Test", function () {

    beforeEach(angular.mock.module("exampleApp"));

    it("increases count", function () {
        angular.mock.inject(function (countService) {
            expect(countService.getCount()).toBe(0);
            countService.plusCount();
            expect(countService.getCount()).toBe(1);
        })
    });

    it("decreases count", function () {
        angular.mock.inject(function (countService) {
            expect(countService.getCount()).toBe(0);
            countService.minusCount();
            expect(countService.getCount()).toBe(-1);
        })
    })
    
    it("increases and decreases count", function () {
        angular.mock.inject(function (countService) {
            expect(countService.getCount()).toBe(0);
            countService.plusCount();
            expect(countService.getCount()).toBe(1);
            countService.minusCount();
            expect(countService.getCount()).toBe(0);
            countService.minusCount();
            expect(countService.getCount()).toBe(-1);
            countService.plusCount();
            expect(countService.getCount()).toBe(0);
            countService.plusCount();
            expect(countService.getCount()).toBe(1);
            countService.plusCount();
            expect(countService.getCount()).toBe(2);
        })
    })
});