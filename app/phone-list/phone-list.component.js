angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.component.html',
        controller: function PhoneListController() {
            this.phones = [{
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.',
                age: 2015
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.',
                age: 2016
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.',
                age: 2013
            }];

            this.orderProp = 'name';
        }
    });