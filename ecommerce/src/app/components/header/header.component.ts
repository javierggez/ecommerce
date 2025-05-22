import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Top Navigation Bar -->
    <header class="bg-emerald-500 text-white">
      <!-- Upper Navigation -->
      <div class="container mx-auto px-4 py-2 flex justify-end text-xs">
        <nav class="flex space-x-4">
          <a routerLink="#" class="hover:underline">Venta Empresas</a>
          <a routerLink="#" class="hover:underline">Asesoría Online</a>
          <a routerLink="#" class="hover:underline">Estado de mi despacho</a>
          <a routerLink="#" class="hover:underline">Tiendas</a>
          <a routerLink="#" class="hover:underline">Centro de ayuda</a>
        </nav>
      </div>

      <!-- Main Navigation -->
      <div class="container mx-auto px-4 py-2 flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center">
          <span class="text-white text-2xl font-bold">PC</span>
          <span class="text-black text-2xl font-bold">Factory</span>
        </a>

        <!-- Categories Button -->
        <button class="bg-emerald-600 text-white px-4 py-2 rounded flex items-center">
          <span class="mr-2">☰</span>
          Categorías
        </button>

        <!-- Search Bar -->
        <div class="relative flex-1 max-w-xl mx-4">
          <input
            type="text"
            placeholder="Busca aquí la tecnología para ti..."
            class="w-full py-2 px-4 rounded-md"
          />
          <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </button>
        </div>

        <!-- User Menu -->
        <div class="flex items-center space-x-4">
          <div class="text-sm">
            <span>Hola, ingresa</span>
            <span class="text-xs ml-1">▼</span>
          </div>
          <a routerLink="#" class="text-sm">Mis compras</a>
          <a routerLink="#" class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
