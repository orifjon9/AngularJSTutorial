angular
    .module('core.phone')
    .factory('PhoneService', ['$resource',
        function($resource) {
            return $resource('assets/data/:phoneId.json', {}, {
                query: {
                    method: 'GET',
                    params: { phoneId: 'phones' },
                    isArray: true
                }
            });
        }
    ]);