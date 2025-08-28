export default function ProductCard({ image, name, description, bgColor = "" }) {
  const getBgColorClass = (color) => {
    switch(color) {
      case 'red': return 'bg-red-500';
      case 'pink': return 'bg-pink-300';
      case 'blue': return 'bg-sky-300';
      default: return 'bg-gray-200';
    }
  };

  const isCircular = bgColor !== "";

  return (
    <div className="bg-gray-200 rounded-2xl p-8 text-center flex flex-col items-center gap-5 transition-transform duration-300 hover:-translate-y-1">
      <div className={`w-38 h-38 overflow-hidden flex items-center justify-center ${
        isCircular ? `rounded-full p-3 ${getBgColorClass(bgColor)}` : ''
      }`}
        style={{width: '150px', height: '150px'}}
      >
        <img 
          src={image} 
          alt={name}
          className={`w-full h-full object-cover ${
            isCircular ? 'rounded-full' : ''
          }`}
          style={isCircular ? {width: '90%', height: '90%'} : {}}
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 my-3">
        {name}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4 text-center">
        {description}
      </p>
      <button className="bg-red-600 text-white border-none py-3 px-6 rounded-3xl font-bold cursor-pointer transition-all duration-300 text-sm hover:bg-red-800 hover:-translate-y-1">
        Añadir Carrito
      </button>
    </div>
  );
}