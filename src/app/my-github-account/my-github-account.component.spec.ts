import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGithubAccountComponent } from './my-github-account.component';

describe('MyGithubAccountComponent', () => {
  let component: MyGithubAccountComponent;
  let fixture: ComponentFixture<MyGithubAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyGithubAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyGithubAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
