import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { CategoryListComponent } from '@app/feature/categories/components/category-list/category-list.component';

@Component({
  selector: 'app-categories',
  template: `
    <app-search />
    <ion-content [fullscreen]="true">
      <app-category-list />
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, SearchComponent, CategoryListComponent],
})
export class CategoriesPage {}
