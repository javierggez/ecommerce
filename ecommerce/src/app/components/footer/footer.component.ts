import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"

interface FooterColumn {
  title: string
  links: { text: string; url: string }[]
}

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Footer -->
    <footer class="bg-white border-t mt-8">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between">
          <!-- Logo -->
          <div class="mb-6 md:mb-0">
            <a routerLink="/" class="flex items-center">
              <span class="text-emerald-500 text-3xl font-bold">PC</span>
              <span class="text-black text-3xl font-bold">Factory</span>
            </a>

            <div class="mt-6 bg-emerald-100 p-4 rounded-md flex items-center">
              <span class="mr-2">📍</span>
              <span class="font-bold">Encuentra tu tienda</span>
            </div>

            <div class="mt-4 flex items-center">
              <span class="mr-2">📞</span>
              <span>Ventas</span>
            </div>
            <div class="text-sm">+56 2 2560 0040</div>
          </div>

          <!-- Footer Columns -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
            <!-- Columns -->
            <div *ngFor="let column of footerColumns">
              <h3 class="font-bold mb-4">{{ column.title }}</h3>
              <ul class="space-y-2 text-sm">
                <li *ngFor="let link of column.links">
                  <a [routerLink]="link.url" class="hover:underline">
                    {{ link.text }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  footerColumns: FooterColumn[] = [
    {
      title: "Mundo pc Factory",
      links: [
        { text: "Gamer Zone", url: "#" },
        { text: "Navidad", url: "#" },
        { text: "Cyber", url: "#" },
        { text: "BlackDays", url: "#" },
        { text: "Outlet tecnológico", url: "#" },
      ],
    },
    {
      title: "¿Necesitas Ayuda?",
      links: [
        { text: "Centro de ayuda", url: "#" },
        { text: "Estado de mi despacho", url: "#" },
        { text: "Revisa tu boleta", url: "#" },
        { text: "Orden de servicio", url: "#" },
        { text: "Preguntas frecuentes", url: "#" },
      ],
    },
    {
      title: "Acerca de pc Factory",
      links: [
        { text: "Quiénes somos", url: "#" },
        { text: "Representante Legal", url: "#" },
        { text: "Beneficios de comprar con nosotros", url: "#" },
        { text: "Privacidad y seguridad", url: "#" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { text: "Consejos y tips tecnológicos", url: "#" },
        { text: "Asesórate Online", url: "#" },
        { text: "Arma tu PC", url: "#" },
        { text: "Puntos verdes", url: "#" },
        { text: "Enter pro", url: "#" },
      ],
    },
  ]
}
