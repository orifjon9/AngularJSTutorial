angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.component.html',
        controller: ['$http', function PhoneListController($http) {
            var self = this;
            self.orderProp = 'name';

            $http.get('assets/data/phones.json')
                .then(response => {
                    self.phones = response.data;
                });
        }]
    });