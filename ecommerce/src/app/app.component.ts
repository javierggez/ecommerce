import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterOutlet } from "@angular/router"
import { HeaderComponent } from "./components/header/header.component"
import { PromoBannerComponent } from "./components/promo-banner/promo-banner.component"
import { ProductSliderComponent } from "./components/product-slider/product-slider.component"
import { OfertasComponent } from "./components/ofertas/ofertas.component"
import { ComputacionComponent } from "./components/computacion/computacion.component"
import { ConsejosComponent } from "./components/consejos/consejos.component"
import { FooterComponent } from "./components/footer/footer.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    PromoBannerComponent,
    ProductSliderComponent,
    OfertasComponent,
    ComputacionComponent,
    ConsejosComponent,
    FooterComponent,
  ],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header></app-header>
      <app-promo-banner></app-promo-banner>
      <app-product-slider></app-product-slider>
      <app-ofertas></app-ofertas>
      <app-computacion></app-computacion>
      <app-consejos></app-consejos>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {
  title = "pcfactory-angular"
}
