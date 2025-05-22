import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-product-slider",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Main Content - Product Slider -->
    <div class="relative bg-gradient-to-r from-gray-700 to-gray-800 overflow-hidden">
      <button class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-white">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>

      <div class="container mx-auto px-4 py-8 flex items-center justify-between">
        <!-- Left Product -->
        <div class="flex-1 relative">
          <div class="bg-blue-600 text-white px-4 py-2 rounded-md inline-block mb-4">
            WiFi 5 con velocidad hasta 1200 Mbps
          </div>

          <h2 class="text-white text-2xl font-bold">
            Router Linksys<sup>®</sup>
          </h2>
          <p class="text-white mb-4">Micro LN3101 AC1200 Dual Band</p>

          <div class="relative">
            <div class="bg-yellow-300 inline-block px-4 py-2 rounded-lg">
              <span class="text-xs">$</span>
              <span class="text-4xl font-bold">38.790</span>
            </div>
            <div class="bg-green-400 text-white px-4 py-2 rounded-lg absolute -right-10 top-0">
              <span class="text-3xl font-bold">-52%</span>
            </div>
          </div>
          <p class="text-white text-sm mt-2">Referencial: $79.990</p>

          <img
            src="/assets/placeholder.svg"
            alt="Router Linksys Micro LN3101"
            width="400"
            height="300"
            class="mt-4"
          />
        </div>

        <!-- Right Product -->
        <div class="flex-1 relative">
          <div class="bg-blue-600 text-white px-4 py-2 rounded-md inline-block mb-4">
            WiFi 6 con velocidad hasta 3000 Mbps
          </div>

          <h2 class="text-white text-2xl font-bold">
            Router Mesh Linksys<sup>®</sup>
          </h2>
          <p class="text-white mb-4">Velop Micro LN1101 AX3000 Dual Band</p>

          <div class="relative">
            <div class="bg-yellow-300 inline-block px-4 py-2 rounded-lg">
              <span class="text-xs">$</span>
              <span class="text-4xl font-bold">129.990</span>
            </div>
            <div class="bg-green-400 text-white px-4 py-2 rounded-lg absolute -right-10 top-0">
              <span class="text-3xl font-bold">-24%</span>
            </div>
          </div>
          <p class="text-white text-sm mt-2">Referencial: $169.990</p>

          <div class="text-white text-sm mt-2">
            O llévalo hasta en <br />
            24 cuotas sin interés de <span class="text-xl font-bold text-blue-300">$ 5.583</span>
          </div>

          <img
            src="/assets/placeholder.svg"
            alt="Router Mesh Linksys Velop"
            width="400"
            height="300"
            class="mt-4"
          />
        </div>
      </div>

      <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-white">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>

      <!-- Slider Indicators -->
      <div class="flex justify-center space-x-2 py-4">
        <ng-container *ngFor="let _ of [0,1,2,3,4,5,6,7]; let i = index">
          <div [class]="'h-2 w-2 rounded-full ' + (i === 0 ? 'bg-emerald-500' : 'bg-gray-400')"></div>
        </ng-container>
      </div>

      <!-- Technology Banner -->
      <div class="absolute bottom-0 left-0 bg-emerald-500 py-2 px-4">
        <div class="text-black font-bold">Tecnología</div>
        <div class="text-yellow-300 font-bold">para todo</div>
      </div>
    </div>
  `,
})
export class ProductSliderComponent {}
