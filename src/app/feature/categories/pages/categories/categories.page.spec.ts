import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CategoriesPage } from './categories.page';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterModule } from '@angular/router';

describe('CategoriesPage', () => {
  let component: CategoriesPage;
  let fixture: ComponentFixture<CategoriesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CategoriesPage, ApolloTestingModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
