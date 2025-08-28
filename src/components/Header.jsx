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
          className="no-underline py-2 px-4 text-purple-800 font-medium transition-all duration-300 hover:text-white hover:rounded-xl"
          style={{
            ':hover': {
              backgroundColor: '#A52A2A'
            }
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#A52A2A'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Menu
        </a>
        <a 
          href="#" 
          className="no-underline py-2 px-4 text-purple-800 font-medium transition-all duration-300 hover:text-white hover:rounded-xl"
          onMouseEnter={(e) => e.target.style.backgroundColor = '#A52A2A'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Categorías
        </a>
        <a 
          href="#" 
          className="no-underline py-2 px-4 text-purple-800 font-medium transition-all duration-300 hover:text-white hover:rounded-xl"
          onMouseEnter={(e) => e.target.style.backgroundColor = '#A52A2A'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Puntos de venta oficiales
        </a>
        <a 
          href="#" 
          className="no-underline py-2 px-4 text-purple-800 font-medium transition-all duration-300 hover:text-white hover:rounded-xl"
          onMouseEnter={(e) => e.target.style.backgroundColor = '#A52A2A'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Blog
        </a>
      </nav>
    </header>
  );
}