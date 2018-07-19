angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.component.html',
        controller: ['PhoneService', function PhoneListController(phoneService) {
            this.orderProp = 'name';
            this.phones = phoneService.query();
            /*$http.get('assets/data/phones.json')
                .then(response => {
                    self.phones = response.data;
                });*/
        }]
    });