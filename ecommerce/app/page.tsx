import Image from "next/image"
import { Search, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <header className="bg-emerald-500 text-white">
        {/* Upper Navigation */}
        <div className="container mx-auto px-4 py-2 flex justify-end text-xs">
          <nav className="flex space-x-4">
            <Link href="#" className="hover:underline">
              Venta Empresas
            </Link>
            <Link href="#" className="hover:underline">
              Asesoría Online
            </Link>
            <Link href="#" className="hover:underline">
              Estado de mi despacho
            </Link>
            <Link href="#" className="hover:underline">
              Tiendas
            </Link>
            <Link href="#" className="hover:underline">
              Centro de ayuda
            </Link>
          </nav>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-white text-2xl font-bold">PC</span>
            <span className="text-black text-2xl font-bold">Factory</span>
          </Link>

          {/* Categories Button */}
          <button className="bg-emerald-600 text-white px-4 py-2 rounded flex items-center">
            <span className="mr-2">☰</span>
            Categorías
          </button>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-xl mx-4">
            <input
              type="text"
              placeholder="Busca aquí la tecnología para ti..."
              className="w-full py-2 px-4 rounded-md"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <span>Hola, ingresa</span>
              <span className="text-xs ml-1">▼</span>
            </div>
            <Link href="#" className="text-sm">
              Mis compras
            </Link>
            <Link href="#" className="relative">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>

      {/* Promo Banner */}
      <div className="bg-gray-700 text-white text-center py-1 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <span className="mr-2">📦</span> Únicos con Retiro <span className="text-yellow-300 mx-1">inmediato</span> en
          tienda |<span className="mx-2">💳</span> Hasta <span className="font-bold">24 Cuotas</span> sin interés |
          <span className="mx-2">🚚</span> Envío de <span className="font-bold">24 a 72 Hrs.</span> Hábiles en Stgo*.
        </div>
      </div>

      {/* Main Content - Product Slider */}
      <div className="relative bg-gradient-to-r from-gray-700 to-gray-800 overflow-hidden">
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full z-10">
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <div className="container mx-auto px-4 py-8 flex items-center justify-between">
          {/* Left Product */}
          <div className="flex-1 relative">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-md inline-block mb-4">
              WiFi 5 con velocidad hasta 1200 Mbps
            </div>

            <h2 className="text-white text-2xl font-bold">
              Router Linksys<sup>®</sup>
            </h2>
            <p className="text-white mb-4">Micro LN3101 AC1200 Dual Band</p>

            <div className="relative">
              <div className="bg-yellow-300 inline-block px-4 py-2 rounded-lg">
                <span className="text-xs">$</span>
                <span className="text-4xl font-bold">38.790</span>
              </div>
              <div className="bg-green-400 text-white px-4 py-2 rounded-lg absolute -right-10 top-0">
                <span className="text-3xl font-bold">-52%</span>
              </div>
            </div>
            <p className="text-white text-sm mt-2">Referencial: $79.990</p>

            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Router Linksys Micro LN3101"
              width={400}
              height={300}
              className="mt-4"
            />
          </div>

          {/* Right Product */}
          <div className="flex-1 relative">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-md inline-block mb-4">
              WiFi 6 con velocidad hasta 3000 Mbps
            </div>

            <h2 className="text-white text-2xl font-bold">
              Router Mesh Linksys<sup>®</sup>
            </h2>
            <p className="text-white mb-4">Velop Micro LN1101 AX3000 Dual Band</p>

            <div className="relative">
              <div className="bg-yellow-300 inline-block px-4 py-2 rounded-lg">
                <span className="text-xs">$</span>
                <span className="text-4xl font-bold">129.990</span>
              </div>
              <div className="bg-green-400 text-white px-4 py-2 rounded-lg absolute -right-10 top-0">
                <span className="text-3xl font-bold">-24%</span>
              </div>
            </div>
            <p className="text-white text-sm mt-2">Referencial: $169.990</p>

            <div className="text-white text-sm mt-2">
              O llévalo hasta en <br />
              24 cuotas sin interés de <span className="text-xl font-bold text-blue-300">$ 5.583</span>
            </div>

            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Router Mesh Linksys Velop"
              width={400}
              height={300}
              className="mt-4"
            />
          </div>
        </div>

        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full z-10">
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slider Indicators */}
        <div className="flex justify-center space-x-2 py-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`h-2 w-2 rounded-full ${i === 0 ? "bg-emerald-500" : "bg-gray-400"}`} />
          ))}
        </div>

        {/* Technology Banner */}
        <div className="absolute bottom-0 left-0 bg-emerald-500 py-2 px-4">
          <div className="text-black font-bold">Tecnología</div>
          <div className="text-yellow-300 font-bold">para todo</div>
        </div>
      </div>

      {/* Ofertas y lanzamientos Section */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="bg-emerald-500 text-white text-center py-3 mb-6">
            <h2 className="text-xl font-bold">Ofertas y lanzamientos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Producto 1 - Consola Portátil */}
            <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Consola Portátil Asus"
                width={150}
                height={150}
                className="mb-4"
              />
              <div className="text-center">
                <p className="font-bold">Consola Portátil Asus</p>
                <div className="relative mt-2">
                  <div className="bg-yellow-300 inline-block px-3 py-1 rounded-lg">
                    <span className="text-xs">$</span>
                    <span className="text-2xl font-bold">94.990</span>
                  </div>
                  <div className="bg-green-400 text-white px-2 py-1 rounded-lg absolute -right-4 top-0">
                    <span className="text-xl font-bold">-14%</span>
                  </div>
                </div>
                <p className="text-xs mt-2">O llévalo hasta en 24 cuotas sin interés de $4.808</p>
              </div>
            </div>

            {/* Producto 2 - Teclado Gamer */}
            <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Teclado Gear Gamer"
                width={150}
                height={150}
                className="mb-4"
              />
              <div className="text-center">
                <p className="font-bold">Teclado Gear Gamer</p>
                <div className="relative mt-2">
                  <div className="bg-yellow-300 inline-block px-3 py-1 rounded-lg">
                    <span className="text-xs">$</span>
                    <span className="text-2xl font-bold">23.690</span>
                  </div>
                  <div className="bg-green-400 text-white px-2 py-1 rounded-lg absolute -right-4 top-0">
                    <span className="text-xl font-bold">-50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Producto 3 - Smartphone Motorola */}
            <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Smartphone Motorola"
                width={150}
                height={150}
                className="mb-4"
              />
              <div className="text-center">
                <p className="font-bold">Smartphone Motorola®</p>
                <p className="text-sm">Moto G25 64GB/4GB</p>
                <div className="relative mt-2">
                  <div className="bg-yellow-300 inline-block px-3 py-1 rounded-lg">
                    <span className="text-xs">$</span>
                    <span className="text-2xl font-bold">94.990</span>
                  </div>
                  <div className="bg-green-400 text-white px-2 py-1 rounded-lg absolute -right-4 top-0">
                    <span className="text-xl font-bold">-21%</span>
                  </div>
                </div>
                <p className="text-xs mt-2">O llévalo hasta en 24 cuotas sin interés de $4.079</p>
              </div>
            </div>

            {/* Producto 4 - Otro Smartphone */}
            <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Smartphone"
                width={150}
                height={150}
                className="mb-4"
              />
            </div>
          </div>

          {/* Banner Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {/* Banner Cricut */}
            <div className="col-span-1 md:col-span-1 bg-emerald-500 rounded-md p-4 text-white text-center relative">
              <h3 className="text-2xl font-bold mb-2">cricut</h3>
              <p className="mb-4">
                Echa a<br />
                volar tu
                <br />
                imaginación_
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Ver productos aquí</button>
            </div>

            {/* Banner Audífonos */}
            <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Audífonos Gamer Corsair"
                width={150}
                height={150}
                className="mb-4"
              />
              <div className="text-center">
                <p className="font-bold">Audífonos Gamer Corsair</p>
                <div className="relative mt-2">
                  <div className="bg-yellow-300 inline-block px-3 py-1 rounded-lg">
                    <span className="text-xs">$</span>
                    <span className="text-2xl font-bold">39.990</span>
                  </div>
                  <div className="bg-green-400 text-white px-2 py-1 rounded-lg absolute -right-4 top-0">
                    <span className="text-xl font-bold">-11%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Drones */}
            <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Drones SYMA"
                width={150}
                height={150}
                className="mb-4"
              />
              <div className="text-center">
                <p className="font-bold">Drones SYMA</p>
                <p className="text-sm">Encuéntralos en pc factory</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Computación Section */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="bg-emerald-500 text-white text-center py-3 mb-6">
            <h2 className="text-xl font-bold">Computación</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Notebook 1 */}
            <div className="border p-4 rounded-md flex flex-col items-center relative">
              <div className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1">Oferta Destacada</div>
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Notebook Vivobook"
                width={150}
                height={150}
                className="mb-4"
              />
              <div className="mt-auto w-full">
                <p className="font-bold text-sm">Notebook Vivobook Go 14</p>
                <p className="text-xs">E1404 Intel Core i3-N305 14.0"...</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="bg-yellow-300 px-2 py-1 rounded text-sm">
                    <span className="font-bold">$387.990</span>
                  </div>
                  <span className="text-xs text-gray-500">+100 unid.</span>
                </div>
                <Image
                  src="/placeholder.svg?height=30&width=100"
                  alt="Delivery badge"
                  width={100}
                  height={30}
                  className="mt-2"
                />
              </div>
            </div>

            {/* Notebook 2-5 (repetidos con diferentes precios) */}
            {[
              { name: "Notebook Gamer TUF A15", price: "$698.390", units: "+150 unid." },
              { name: "Notebook Gamer LOQ Gen 9", price: "$1.066.990", units: "+100 unid." },
              { name: "Notebook Intel Ultra 3 125H", price: "$746.890", units: "80 unid." },
              { name: "Notebook Gamer LOQ Gen 9", price: "$775.990", units: "4 unid." },
            ].map((notebook, index) => (
              <div key={index} className="border p-4 rounded-md flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={notebook.name}
                  width={150}
                  height={150}
                  className="mb-4"
                />
                <div className="mt-auto w-full">
                  <p className="font-bold text-sm">{notebook.name}</p>
                  <p className="text-xs">AMD Ryzen 7 7735HS NVIDIA...</p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="bg-yellow-300 px-2 py-1 rounded text-sm">
                      <span className="font-bold">{notebook.price}</span>
                    </div>
                    <span className="text-xs text-gray-500">{notebook.units}</span>
                  </div>
                  <Image
                    src="/placeholder.svg?height=30&width=100"
                    alt="Delivery badge"
                    width={100}
                    height={30}
                    className="mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consejos y tips tecnológicos */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 mb-6">
            <h2 className="font-bold">Consejos y tips tecnológicos_</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tip 1 */}
            <div className="bg-gray-100 rounded-md overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="SSD Guide"
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="absolute bottom-0 right-0 bg-emerald-500 p-2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="SSD Icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">La Guía del SSD_</h3>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-gray-100 rounded-md overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Projector Guide"
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="absolute bottom-0 right-0 bg-emerald-500 p-2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Projector Icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Guía del proyector</h3>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bg-gray-100 rounded-md overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Gaming Monitor Guide"
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="absolute bottom-0 right-0 bg-emerald-500 p-2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Monitor Icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">La guía del monitor gamer</h3>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="bg-gray-100 rounded-md overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="WiFi 6 Guide"
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="absolute bottom-0 right-0 bg-emerald-500 p-2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="WiFi Icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">WiFi 6</h3>
                <p className="text-sm">Prepárate para la nueva generación de WiFi_</p>
              </div>
            </div>
          </div>

          <div className="text-right mt-4">
            <a href="#" className="text-gray-600 hover:underline text-sm">
              Ver todos
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="text-emerald-500 text-3xl font-bold">PC</span>
                <span className="text-black text-3xl font-bold">Factory</span>
              </Link>

              <div className="mt-6 bg-emerald-100 p-4 rounded-md flex items-center">
                <span className="mr-2">📍</span>
                <span className="font-bold">Encuentra tu tienda</span>
              </div>

              <div className="mt-4 flex items-center">
                <span className="mr-2">📞</span>
                <span>Ventas</span>
              </div>
              <div className="text-sm">+56 2 2560 0040</div>
            </div>

            {/* Footer Columns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
              {/* Column 1 */}
              <div>
                <h3 className="font-bold mb-4">Mundo pc Factory</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Gamer Zone
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Navidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Cyber
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      BlackDays
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Outlet tecnológico
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="font-bold mb-4">¿Necesitas Ayuda?</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Centro de ayuda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Estado de mi despacho
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Revisa tu boleta
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Orden de servicio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Preguntas frecuentes
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="font-bold mb-4">Acerca de pc Factory</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Quiénes somos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Representante Legal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Beneficios de comprar con nosotros
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacidad y seguridad
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h3 className="font-bold mb-4">Servicios</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Consejos y tips tecnológicos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Asesórate Online
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Arma tu PC
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Puntos verdes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Enter pro
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
