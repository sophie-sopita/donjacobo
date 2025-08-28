
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full mx-auto px-5" style={{fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default App