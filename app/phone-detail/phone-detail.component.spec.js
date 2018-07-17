describe('phoneDetail', function() {

    // Load the module that contains the `phoneDetail` component before each test
    beforeEach(module('phoneDetail'));

    // Test the controller
    describe('PhoneDetailController', function() {
        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('assets/data/xyz.json')
                .respond({
                    name: 'phone xyz',
                    images: ['test_img1', 'test_img2']
                });
            $routeParams.id = 'xyz';
            ctrl = $componentController('phoneDetail');
        }));

        it('should fetch the phone details', function() {
            expect(ctrl.phone).toBeUndefined();
            $httpBackend.flush();
            expect(ctrl.phone).toEqual({ name: 'phone xyz' });
        });
    });
});