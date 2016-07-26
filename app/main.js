"use strict";
var upgrade_1 = require('@angular/upgrade');
var http_1 = require('@angular/http');
var phone_service_1 = require('./core/phone/phone.service');
var upgradeAdapter = new upgrade_1.UpgradeAdapter();
upgradeAdapter.addProvider(http_1.HTTP_PROVIDERS);
upgradeAdapter.addProvider(phone_service_1.Phone);
upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
angular.module('core.phone').factory('phone', upgradeAdapter.downgradeNg2Provider(phone_service_1.Phone));
//# sourceMappingURL=main.js.map