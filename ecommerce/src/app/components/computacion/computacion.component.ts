import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Notebook {
  name: string
  description: string
  price: string
  units: string
  destacado?: boolean
}

@Component({
  selector: "app-computacion",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Computación Section -->
    <div class="bg-white py-6">
      <div class="container mx-auto px-4">
        <div class="bg-emerald-500 text-white text-center py-3 mb-6">
          <h2 class="text-xl font-bold">Computación</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <!-- Notebooks -->
          <div *ngFor="let notebook of notebooks" class="border p-4 rounded-md flex flex-col items-center relative">
            <div *ngIf="notebook.destacado" class="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1">Oferta Destacada</div>
            <img
              src="/assets/placeholder.svg"
              [alt]="notebook.name"
              width="150"
              height="150"
              class="mb-4"
            />
            <div class="mt-auto w-full">
              <p class="font-bold text-sm">{{ notebook.name }}</p>
              <p class="text-xs">{{ notebook.description }}</p>
              <div class="flex justify-between items-center mt-2">
                <div class="bg-yellow-300 px-2 py-1 rounded text-sm">
                  <span class="font-bold">{{ notebook.price }}</span>
                </div>
                <span class="text-xs text-gray-500">{{ notebook.units }}</span>
              </div>
              <img
                src="/assets/placeholder.svg"
                alt="Delivery badge"
                width="100"
                height="30"
                class="mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ComputacionComponent {
  notebooks: Notebook[] = [
    {
      name: "Notebook Vivobook Go 14",
      description: 'E1404 Intel Core i3-N305 14.0"...',
      price: "$387.990",
      units: "+100 unid.",
      destacado: true,
    },
    {
      name: "Notebook Gamer TUF A15",
      description: "AMD Ryzen 7 7735HS NVIDIA...",
      price: "$698.390",
      units: "+150 unid.",
    },
    {
      name: "Notebook Gamer LOQ Gen 9",
      description: "AMD Ryzen 7 7735HS NVIDIA...",
      price: "$1.066.990",
      units: "+100 unid.",
    },
    {
      name: "Notebook Intel Ultra 3 125H",
      description: "AMD Ryzen 7 7735HS NVIDIA...",
      price: "$746.890",
      units: "80 unid.",
    },
    {
      name: "Notebook Gamer LOQ Gen 9",
      description: "AMD Ryzen 7 7735HS NVIDIA...",
      price: "$775.990",
      units: "4 unid.",
    },
  ]
}
