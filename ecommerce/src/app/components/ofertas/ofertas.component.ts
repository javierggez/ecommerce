import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Producto {
  nombre: string
  descripcion?: string
  precio: string
  descuento: string
  cuotas?: string
}

@Component({
  selector: "app-ofertas",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Ofertas y lanzamientos Section -->
    <div class="bg-white py-6">
      <div class="container mx-auto px-4">
        <div class="bg-emerald-500 text-white text-center py-3 mb-6">
          <h2 class="text-xl font-bold">Ofertas y lanzamientos</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Productos -->
          <div *ngFor="let producto of productos" class="bg-gray-100 p-4 rounded-md flex flex-col items-center">
            <img
              src="/assets/placeholder.svg"
              [alt]="producto.nombre"
              width="150"
              height="150"
              class="mb-4"
            />
            <div class="text-center">
              <p class="font-bold">{{ producto.nombre }}</p>
              <p *ngIf="producto.descripcion" class="text-sm">{{ producto.descripcion }}</p>
              <div class="relative mt-2">
                <div class="bg-yellow-300 inline-block px-3 py-1 rounded-lg">
                  <span class="text-xs">$</span>
                  <span class="text-2xl font-bold">{{ producto.precio }}</span>
                </div>
                <div class="bg-green-400 text-white px-2 py-1 rounded-lg absolute -right-4 top-0">
                  <span class="text-xl font-bold">{{ producto.descuento }}</span>
                </div>
              </div>
              <p *ngIf="producto.cuotas" class="text-xs mt-2">O llévalo hasta en 24 cuotas sin interés de {{ producto.cuotas }}</p>
            </div>
          </div>
        </div>

        <!-- Banner Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <!-- Banner Cricut -->
          <div class="col-span-1 md:col-span-1 bg-emerald-500 rounded-md p-4 text-white text-center relative">
            <h3 class="text-2xl font-bold mb-2">cricut</h3>
            <p class="mb-4">
              Echa a<br />
              volar tu
              <br />
              imaginación_
            </p>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-md">Ver productos aquí</button>
          </div>

          <!-- Banner Audífonos -->
          <div class="bg-gray-100 p-4 rounded-md flex flex-col items-center">
            <img
              src="/assets/placeholder.svg"
              alt="Audífonos Gamer Corsair"
              width="150"
              height="150"
              class="mb-4"
            />
            <div class="text-center">
              <p class="font-bold">Audífonos Gamer Corsair</p>
              <div class="relative mt-2">
                <div class="bg-yellow-300 inline-block px-3 py-1 rounded-lg">
                  <span class="text-xs">$</span>
                  <span class="text-2xl font-bold">39.990</span>
                </div>
                <div class="bg-green-400 text-white px-2 py-1 rounded-lg absolute -right-4 top-0">
                  <span class="text-xl font-bold">-11%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Banner Drones -->
          <div class="bg-gray-100 p-4 rounded-md flex flex-col items-center">
            <img
              src="/assets/placeholder.svg"
              alt="Drones SYMA"
              width="150"
              height="150"
              class="mb-4"
            />
            <div class="text-center">
              <p class="font-bold">Drones SYMA</p>
              <p class="text-sm">Encuéntralos en pc factory</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class OfertasComponent {
  productos: Producto[] = [
    {
      nombre: "Consola Portátil Asus",
      precio: "94.990",
      descuento: "-14%",
      cuotas: "$4.808",
    },
    {
      nombre: "Teclado Gear Gamer",
      precio: "23.690",
      descuento: "-50%",
    },
    {
      nombre: "Smartphone Motorola®",
      descripcion: "Moto G25 64GB/4GB",
      precio: "94.990",
      descuento: "-21%",
      cuotas: "$4.079",
    },
    {
      nombre: "Smartphone",
      precio: "89.990",
      descuento: "-15%",
    },
  ]
}
