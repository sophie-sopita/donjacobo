import { products } from '../data.js';

export default function Hero() {
  return (
    <main 
      className="relative h-96 rounded-2xl overflow-hidden my-5 mx-0"
      style={{
        backgroundImage: 'url("/postresyponques.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '420px'
      }}
    >
      <article className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-white text-center"
        style={{
          background: 'rgba(0, 0, 0, 0.4)'
        }}
      >
        <h1 className="text-6xl font-bold mb-3">
          Para los gustos, los sabores
        </h1>
        <h2 className="text-3xl font-normal mb-5">
          Ahora piña colada
        </h2>
        <button className="bg-red-600 py-4 px-8 text-white rounded-3xl font-bold text-base border-none cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-red-800 hover:-translate-y-1">
          Compra YA
        </button>
      </article>
      
      {/* Carrito antes del cierre de main - Renderizado condicional */}
      {products.length > 0 && (
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-lg p-3">
          <p className="text-gray-800 text-sm font-medium">
            {products.length} {products.length === 1 ? 'producto' : 'productos'} disponibles
          </p>
        </div>
      )}
    </main>
  );
}