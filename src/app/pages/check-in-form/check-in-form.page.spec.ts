import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckInFormPage } from './check-in-form.page';

describe('CheckInFormPage', () => {
  let component: CheckInFormPage;
  let fixture: ComponentFixture<CheckInFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckInFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
