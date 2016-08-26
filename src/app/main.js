"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var user_service_1 = require('./services/user.service');
var messages_service_1 = require('./services/messages.service');
var http_1 = require('@angular/http');
if (ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    user_service_1.UserService,
    messages_service_1.MessageService,
    http_1.Http,
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map