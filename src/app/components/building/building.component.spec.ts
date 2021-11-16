import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildingComponent } from './building.component';

describe('BuildingComponent', () => {
  let component: BuildingComponent;
  let fixture: ComponentFixture<BuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#minutes to hour should return 11:11am', () => {
    const ans = component.minutesToHour(671);

    expect(ans).toEqual('11:11am');

  });
});
