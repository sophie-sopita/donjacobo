export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-10">
      <img 
        src="/logo.jpeg" 
        alt="Don Jacobo Logo" 
        className="w-45" 
        style={{width: '180px'}}
      />
      <nav className="flex gap-8">
        <a 
          href="#" 
          className="no-underline py-2 px-4 text-purple-800 font-medium transition-all duration-300 hover:bg-amber-800 hover:text-white hover:rounded-xl"
        >
          Menu
        </a>
        <a 
          href="#" 
          className="no-underline py-2 px-4 text-purple-800 font-medium transition-all duration-300 hover:bg-amber-800 hover:text-white hover:rounded-xl"
        >
          Categorías
        </a>
        <a 
          href="#" 
          className="no-underline py-2 px-4 text-purple-800 font-medium transition-all duration-300 hover:bg-amber-800 hover:text-white hover:rounded-xl"
        >
          Puntos de venta oficiales
        </a>
        <a 
          href="#" 
          className="no-underline py-2 px-4 text-purple-800 font-medium transition-all duration-300 hover:bg-amber-800 hover:text-white hover:rounded-xl"
        >
          Blog
        </a>
      </nav>
    </header>
  );
}