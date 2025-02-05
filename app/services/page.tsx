import Image from 'next/image'
import { Car, Baby, Globe } from 'lucide-react'
import { GoogleReviews } from '../components/google-reviews'
import { BookingForm } from '../components/booking-form'



export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-orange-500 to-orange-600 -mx-4 px-4 overflow-hidden">
        {/* Patrón de fondo animado */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 
                        animate-[pulse_4s_ease-in-out_infinite]"></div>
        
        {/* Círculos decorativos */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400/20 rounded-full 
                        -translate-y-1/2 translate-x-1/2 blur-3xl animate-[bounce_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/20 rounded-full 
                        translate-y-1/2 -translate-x-1/2 blur-3xl animate-[bounce_6s_ease-in-out_infinite]"></div>

        {/* Contenido */}
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-6xl font-bold mb-8 
                         animate-[fadeIn_1s_ease-out] drop-shadow-lg">
            Nuestros Servicios
          </h1>
          <p className="text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed
                        animate-[slideUp_1s_ease-out] drop-shadow">
            Ofrecemos una amplia gama de vehículos, en perfecto estado, 
            <span className="block mt-2">desde autos compactos hasta Van para pasajeros.</span>
          </p>
        </div>

        {/* Decoración inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-24 
                        bg-gradient-to-b from-transparent to-white/10"></div>
      </section>

      {/* Grid de Servicios */}
      <section className="container mx-auto -mt-12 md:-mt-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Vehículos */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden 
                          transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 h-full">
              <div className="mb-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center
                                transform transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Car className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-500 transition-colors">
                Flota Variada
              </h3>
              <p className="text-gray-600">
                Desde autos compactos económicos hasta vans espaciosas para grupos.
              </p>
            </div>
          </div>

          {/* Asientos para niños */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden 
                          transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 h-full">
              <div className="mb-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center
                                transform transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Baby className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-500 transition-colors">
                Asientos para Niños
              </h3>
              <p className="text-gray-600">
                Alquiler de asientos especiales para niños desde 0 a 36 meses.
              </p>
            </div>
          </div>

          {/* Viajes al Exterior */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden 
                          transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 h-full">
              <div className="mb-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center
                                transform transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Globe className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-500 transition-colors">
                Viajes al Exterior
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Image 
                    src="/images/flags/br.png" 
                    alt="Brasil" 
                    width={32} 
                    height={24}
                    className="rounded shadow-sm transform transition-transform hover:scale-110"
                  />
                  <span className="text-sm text-gray-600">Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image 
                    src="/images/flags/ar.png" 
                    alt="Argentina" 
                    width={32} 
                    height={24}
                    className="rounded shadow-sm transform transition-transform hover:scale-110"
                  />
                  <span className="text-sm text-gray-600">Argentina</span>
                </div>
              </div>
              <p className="text-gray-600">
                Opciones de viaje a Brasil y Argentina con toda la documentación necesaria.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Sección de Lavadero */}
      <section>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Servicio de Lavadero Profesional</h2>
            <p className="text-lg text-gray-600">
              Nuestro servicio de lavadero cuenta con personal especializado y productos de primera calidad para dejar tu vehículo impecable.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✓</span>
                Lavado exterior premium
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✓</span>
                Limpieza interior profunda
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✓</span>
                Encerado y pulido profesional
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✓</span>
                Tratamiento de tapicería
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Servicio de Lavadero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reseñas de Google */}
      <GoogleReviews />

      {/* Formulario de Reserva */}
      <BookingForm />
    </div>
  )
}

