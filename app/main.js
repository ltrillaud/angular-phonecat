"use strict";
var upgrade_1 = require('@angular/upgrade');
var http_1 = require('@angular/http');
var phone_service_1 = require('./core/phone/phone.service');
var phone_list_component_1 = require('./phone-list/phone-list.component');
var phone_detail_component_1 = require('./phone-detail/phone-detail.component');
var upgradeAdapter = new upgrade_1.UpgradeAdapter();
upgradeAdapter.addProvider(http_1.HTTP_PROVIDERS);
upgradeAdapter.addProvider(phone_service_1.Phone);
upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
upgradeAdapter.upgradeNg1Provider('$routeParams');
angular.module('core.phone').factory('phone', upgradeAdapter.downgradeNg2Provider(phone_service_1.Phone));
angular.module('phoneList').directive('phoneList', upgradeAdapter.downgradeNg2Component(phone_list_component_1.PhoneListComponent));
angular.module('phoneDetail').directive('phoneDetail', upgradeAdapter.downgradeNg2Component(phone_detail_component_1.PhoneDetailComponent));
//# sourceMappingURL=main.js.map