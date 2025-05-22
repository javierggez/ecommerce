import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-promo-banner",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Promo Banner -->
    <div class="bg-gray-700 text-white text-center py-1 text-sm">
      <div class="container mx-auto px-4 flex items-center justify-center">
        <span class="mr-2">📦</span> Únicos con Retiro <span class="text-yellow-300 mx-1">inmediato</span> en
        tienda |<span class="mx-2">💳</span> Hasta <span class="font-bold">24 Cuotas</span> sin interés |
        <span class="mx-2">🚚</span> Envío de <span class="font-bold">24 a 72 Hrs.</span> Hábiles en Stgo*.
      </div>
    </div>
  `,
})
export class PromoBannerComponent {}
