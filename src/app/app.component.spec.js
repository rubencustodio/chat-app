"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var testing_3 = require('@angular/common/testing');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'as-test',
            template: '<div><as-main-app></as-main-app></div>',
            directives: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
var config = [
    { path: '', component: home_component_1.HomeComponent },
];
// TODO: Use ROUTER_FAKE_PROVIDERS when it's available
describe('AppComponent', function () {
    beforeEach(function () {
        testing_1.addProviders([
            router_1.RouterOutletMap,
            { provide: common_1.LocationStrategy, useClass: testing_3.SpyLocation },
            { provide: router_1.UrlSerializer, useClass: router_1.DefaultUrlSerializer },
            { provide: common_1.Location, useClass: testing_3.SpyLocation },
            {
                provide: router_1.Router,
                useFactory: function (resolver, urlSerializer, outletMap, location, injector) {
                    var r = new router_1.Router(TestComponent, resolver, urlSerializer, outletMap, location, injector, config);
                    return r;
                },
                deps: [core_1.ComponentResolver, router_1.UrlSerializer, router_1.RouterOutletMap, common_1.Location, core_1.Injector]
            },
            { provide: router_1.ActivatedRoute, useFactory: function (r) { return r.routerState.root; }, deps: [router_1.Router] },
        ]);
    });
    it('should have brand Angular 2 Starter', testing_1.async(testing_1.inject([testing_2.TestComponentBuilder], function (tsb) {
        tsb.createAsync(TestComponent).then(function (fixture) {
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            expect(compiled.querySelector('a.navbar-brand'))
                .toContainText('Angular 2 Starter');
        });
    })));
});
//# sourceMappingURL=app.component.spec.js.map