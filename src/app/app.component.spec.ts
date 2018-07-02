import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'circle-of-fifths'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('circle-of-fifths');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to circle-of-fifths!');
    }));
    it('should render Db button representing key of Db', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#Db'));
        const c: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(c).toBeTruthy();
    }));
    it('should render Ab button representing key of Ab', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#Ab'));
        const c: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(c).toBeTruthy();
    }));
    it('should render Eb button representing key of Eb', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#Eb'));
        const c: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(c).toBeTruthy();
    }));
    it('should render Bb button representing key of Bb', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#Bb'));
        const c: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(c).toBeTruthy();
    }));
    it('should render F button representing key of F', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#F'));
        const c: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(c).toBeTruthy();
    }));
    it('should render C button representing key of C', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#C'));
        const c: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(c).toBeTruthy();
    }));
    it('should render G button representing key of G', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#G'));
        const c: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(c).toBeTruthy();
    }));
    it('should render D button representing key of D', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#D'));
        const button: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(button).toBeTruthy();
    }));
    it('should render A button representing key of A', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#A'));
        const button: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(button).toBeTruthy();
    }));
    it('should render E button representing key of E', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#E'));
        const button: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(button).toBeTruthy();
    }));
    it('should render B button representing key of B', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#B'));
        const button: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(button).toBeTruthy();
    }));
    it('should render F# button representing key of F#', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        const cButtonDebugElement = debugElement.query(By.css('#FS'));
        const button: HTMLButtonElement = cButtonDebugElement.nativeElement;
        expect(button).toBeTruthy();
    }));

});
