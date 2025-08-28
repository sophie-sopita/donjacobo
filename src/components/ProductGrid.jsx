import ProductCard from './ProductCard';
import { products } from '../data.js';

function Product(props) {
  return (
    <>
      {/* Conditional Rendering = renderización condicional usando operador ternario */}
      <figure 
        className={`bg-gray-200 flex flex-col items-center mb-8 rounded-[12px] ${
          props.index % 2 === 0 ? "col-span-2" : "col-span-1"
        }`}
      >
        <img className="p-9 w-[60%]" src={props.productProp.imagen} alt="" />
        <h3 className="text-[35px] text-center">{props.productProp.nombre}</h3>
        <section className="flex flex-col items-center gap-4">
          <p className="text-[20px]">{props.productProp.Descripcion}</p>
          <button className="bg-red-600 text-white border-none py-3 px-6 rounded-3xl font-bold cursor-pointer transition-all duration-300 text-sm hover:bg-red-800 hover:-translate-y-1">
            Añadir Carrito
          </button>
        </section>
      </figure>
    </>
  );
}

export default function ProductGrid() {
  // Mostrar el array en consola
  console.log(products);
  
  return (
    <section className="py-16 px-10 bg-gray-50">
      <h2 className="text-center text-4xl text-gray-800 mb-12 font-bold">
        Carrito de compras
      </h2>
      <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Renderizado de listas usando map() */}
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <Product 
              key={product.id}
              productProp={product}
              index={index}
            />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No hay productos disponibles</p>
        )}
      </div>
    </section>
  );
}