import ProductCard from './ProductCard';

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Zepeline",
      image: "/zepeline.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      bgColor: ""
    },
    {
      id: 2,
      name: "Genovesa",
      image: "/genovesa.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      bgColor: "red"
    },
    {
      id: 3,
      name: "Snacks",
      image: "/snacks.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      bgColor: "pink"
    },
    {
      id: 4,
      name: "Tortas",
      image: "/tortas.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      bgColor: "red"
    },
    {
      id: 5,
      name: "Cobitos",
      image: "/cobitos.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      bgColor: "blue"
    },
    {
      id: 6,
      name: "Repostería",
      image: "/reposteria.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      bgColor: "blue"
    }
  ];

  return (
    <section className="py-16 px-10 bg-gray-50">
      <h2 className="text-center text-4xl text-gray-800 mb-12 font-bold">
        Carrito de compras
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            bgColor={product.bgColor}
          />
        ))}
      </div>
    </section>
  );
}