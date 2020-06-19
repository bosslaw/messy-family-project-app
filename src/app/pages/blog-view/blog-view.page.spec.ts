import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogViewPage } from './blog-view.page';

describe('BlogViewPage', () => {
  let component: BlogViewPage;
  let fixture: ComponentFixture<BlogViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
