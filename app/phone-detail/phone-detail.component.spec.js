describe('phoneDetail', function() {

    // Load the module that contains the `phoneDetail` component before each test
    beforeEach(module('phoneDetail'));

    // Test the controller
    describe('PhoneDetailController', function() {
        var $httpBackend, ctrl;

        var xyzPhoneData = {
            name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']
        };

        beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('assets/data/xyz.json')
                .respond(xyzPhoneData);

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