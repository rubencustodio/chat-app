import {
    async,
    inject,
    addProviders,
    ComponentFixture
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { MessageService } from './services/messages.service';
import { Http, HTTP_PROVIDERS } from '@angular/http';


@Component({
    selector: 'as-test',
    template: '<div><as-main-app></as-main-app></div>',
    directives: [AppComponent]
})
class TestComponent {
}

describe('AppComponent', () => {
    beforeEach(() => {
        addProviders([
            UserService,
            MessageService,
            Http,
            HTTP_PROVIDERS
        ]);
    });

    it('should have brand Ruben & Joe\'s Chat app', async(inject([TestComponentBuilder],
        (tsb: TestComponentBuilder) => {
            tsb.createAsync(TestComponent).then((fixture: ComponentFixture<TestComponent>) => {
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;
                expect(compiled).toBeDefined();
                expect(compiled.querySelector('as-chat')).toBeDefined();
                expect(compiled.querySelector('a.navbar-brand')).toContainText('Ruben & Joe\'s Chat app');
            });
        })));
});
