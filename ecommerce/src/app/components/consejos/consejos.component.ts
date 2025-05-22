import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Consejo {
  titulo: string
  subtitulo?: string
  imagen: string
  icono: string
}

@Component({
  selector: "app-consejos",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Consejos y tips tecnológicos -->
    <div class="bg-white py-6">
      <div class="container mx-auto px-4">
        <div class="inline-block bg-blue-600 text-white px-4 py-2 mb-6">
          <h2 class="font-bold">Consejos y tips tecnológicos_</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Tips -->
          <div *ngFor="let consejo of consejos" class="bg-gray-100 rounded-md overflow-hidden">
            <div class="relative">
              <img
                [src]="consejo.imagen"
                [alt]="consejo.titulo"
                width="300"
                height="200"
                class="w-full"
              />
              <div class="absolute bottom-0 right-0 bg-emerald-500 p-2">
                <img
                  [src]="consejo.icono"
                  [alt]="consejo.titulo + ' Icon'"
                  width="40"
                  height="40"
                  class="w-10 h-10"
                />
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg">{{ consejo.titulo }}</h3>
              <p *ngIf="consejo.subtitulo" class="text-sm">{{ consejo.subtitulo }}</p>
            </div>
          </div>
        </div>

        <div class="text-right mt-4">
          <a href="#" class="text-gray-600 hover:underline text-sm">
            Ver todos
          </a>
        </div>
      </div>
    </div>
  `,
})
export class ConsejosComponent {
  consejos: Consejo[] = [
    {
      titulo: "La Guía del SSD_",
      imagen: "/assets/placeholder.svg",
      icono: "/assets/placeholder.svg",
    },
    {
      titulo: "Guía del proyector",
      imagen: "/assets/placeholder.svg",
      icono: "/assets/placeholder.svg",
    },
    {
      titulo: "La guía del monitor gamer",
      imagen: "/assets/placeholder.svg",
      icono: "/assets/placeholder.svg",
    },
    {
      titulo: "WiFi 6",
      subtitulo: "Prepárate para la nueva generación de WiFi_",
      imagen: "/assets/placeholder.svg",
      icono: "/assets/placeholder.svg",
    },
  ]
}
