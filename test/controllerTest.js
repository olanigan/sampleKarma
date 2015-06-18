describe("Controller Test", function () {

    // Arrange
    var mockScope, controller, backend, mockInterval, mockTimeout, mockLog;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($httpBackend) {
        backend = $httpBackend;
        backend.expect("GET", "productData.json").respond(
        [{ "name": "Apples", "category": "Fruit", "price": 1.20 },
        { "name": "Bananas", "category": "Fruit", "price": 2.42 },
        { "name": "Pears", "category": "Fruit", "price": 2.02 }]);
    }));

    beforeEach(angular.mock.inject(function($httpBackend){
        backend = $httpBackend;
        backend.expect("GET", "salesInfo.json").respond(
            [{ "name": "Apples", "sales": 120.0 },
            { "name": "Bananas", "sales": 24.2 },
            { "name": "Pears", "sales": 20.24 }]);
    }));

    beforeEach(angular.mock.inject(function ($controller, $rootScope,
            $http, $interval, $timeout, $log) {
        mockScope = $rootScope.$new();
        mockInterval = $interval;
        mockTimeout = $timeout;
        mockLog = $log;
        $controller("defaultCtrl", {
            $scope: mockScope,
            $http: $http,
            $interval: mockInterval,
            $timeout: mockTimeout,
            $log: mockLog
        });
        backend.flush();
    }));

    // Act and Assess
    it("Creates variable", function () {
        expect(mockScope.counter).toEqual(0);
    })

    it("Increments counter", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });

    it("Makes an Ajax request", function () {
        backend.verifyNoOutstandingExpectation();
    });

    it("Processes Product data", function () {
        expect(mockScope.products).toBeDefined();
        expect(mockScope.products.length).toEqual(3);
    });

    it("Process Sales data", function(){
        expect(mockScope.sales).toBeDefined();
        expect(mockScope.sales.length).toEqual(3);
    });

    it("Preserves Product data order", function () {
        expect(mockScope.products[0].name).toEqual("Apples");
        expect(mockScope.products[1].name).toEqual("Bananas");
        expect(mockScope.products[2].name).toEqual("Pears");
    });
    
    it("Preserves Sales data order", function () {
        expect(mockScope.sales[0].name).toEqual("Apples");
        expect(mockScope.sales[0].sales).toEqual(120);
        expect(mockScope.sales[1].sales).toEqual(24.2);
    })

    it("Limits interval to 10 updates", function () {
        for (var i = 0; i < 11; i++) {
            mockInterval.flush(5000);
        }
        expect(mockScope.intervalCounter).toEqual(10);
    });

    it("Increments timer counter", function () {
        mockTimeout.flush(5000);
        expect(mockScope.timerCounter).toEqual(1);
    });

    it("Writes log messages", function () {
        expect(mockLog.log.logs.length).toEqual(2);
    });
          /**/
});
