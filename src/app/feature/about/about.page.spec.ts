import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AboutPage } from './about.page';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterModule } from '@angular/router';

describe('AboutPage', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AboutPage, ApolloTestingModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
