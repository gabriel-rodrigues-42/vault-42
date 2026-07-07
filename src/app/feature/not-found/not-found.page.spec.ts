import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NotFoundPage } from './not-found.page';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterModule } from '@angular/router';

describe('NotFoundPage', () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NotFoundPage, ApolloTestingModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
