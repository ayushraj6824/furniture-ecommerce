import Hero from '../components/Hero'
import Services from '../components/Services'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { Link } from 'react-router-dom'

export default function Home() {
  const featured = products.slice(0, 6)

  return (
    <>
      <Hero />
      <Services />
      <section className="bg-sand">
        <div className="container-section py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-charcoal">Featured Products</h2>
              <p className="mt-1 text-sm text-gray-600">Curated picks to refresh your space</p>
            </div>
            <Link to="/products" className="text-sm font-medium text-brown-700 hover:underline">View all</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}