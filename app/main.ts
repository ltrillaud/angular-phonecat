import { UpgradeAdapter } from '@angular/upgrade';
import { HTTP_PROVIDERS } from '@angular/http';
import { Phone } from './core/phone/phone.service';

let upgradeAdapter = new UpgradeAdapter();
upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider(Phone);

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);

angular.module('core.phone').factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));
