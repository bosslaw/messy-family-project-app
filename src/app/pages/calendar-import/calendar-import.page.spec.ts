import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendarImportPage } from './calendar-import.page';

describe('CalendarImportPage', () => {
  let component: CalendarImportPage;
  let fixture: ComponentFixture<CalendarImportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarImportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarImportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
