import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { ProductListComponent } from '@app/feature/products/components/product-list/product-list.component';

@Component({
  selector: 'app-products',
  template: `
    <app-search />
    <ion-content [fullscreen]="true">
      <app-product-list />
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, SearchComponent, ProductListComponent],
})
export class ProductsPage {}
