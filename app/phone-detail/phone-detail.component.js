angular
    .module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.component.html',
        controller: ['$routeParams', 'PhoneService', function PhoneDetailController($routeParams, phoneService) {
            var self = this;
            phoneService.get({ phoneId: $routeParams.id }, function(phone) {
                self.phone = phone;
                self.defaultImageUrl = phone.images[0];
            });

            self.setImage = function(img) {
                self.defaultImageUrl = img;
            }
        }]
    });