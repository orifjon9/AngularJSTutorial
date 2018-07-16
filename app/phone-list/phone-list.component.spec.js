'use strict';

describe('phoneList', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('phoneList'));

    // Test the controller
    describe('PhoneListController', function() {
        var ctrl, $httpBackend;

        beforeEach(inject(function($componentController, _$httpBackend_) {
            ctrl = $componentController('phoneList');
            $httpBackend = _$httpBackend_;

            $httpBackend.expectGET('assets/data/phones.json')
                .respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
        }));

        it('should create a `phones` model with 3 phones', function() {
            $httpBackend.flush();
            expect(ctrl.phones.length).toBe(2);
        });

        it('should set a default value for the `orderProp` model', function() {
            expect(ctrl.orderProp).toBe('name');
        });

        it('should create a `phones` property with 2 phones fetched with `$http`', function() {
            expect(ctrl.phones).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.phones).toEqual([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
        });
    });
});