angular
    .module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.component.html',
        controller: ['$routeParams', '$http', function PhoneDetailController($routeParams, $http) {
            var self = this;
            $http.get('assets/data/' + $routeParams.id + '.json')
                .then(response => {
                    self.phone = response.data;
                    self.defaultImageUrl = self.phone.images[0];
                });

            self.setImage = function(img) {
                self.defaultImageUrl = img;
            }
        }]
    });