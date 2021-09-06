import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SatisfactionTrackerOverviewPage } from './satisfaction-tracker-overview.page';

describe('SatisfactionTrackerOverviewPage', () => {
  let component: SatisfactionTrackerOverviewPage;
  let fixture: ComponentFixture<SatisfactionTrackerOverviewPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisfactionTrackerOverviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SatisfactionTrackerOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
