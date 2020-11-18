import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterestListPage } from './interest-list.page';

describe('InterestListPage', () => {
  let component: InterestListPage;
  let fixture: ComponentFixture<InterestListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterestListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
