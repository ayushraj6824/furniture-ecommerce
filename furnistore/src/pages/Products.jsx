import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products as allProducts } from '../data/products'

export default function Products() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allProducts
    return allProducts.filter((p) =>
      [p.name, p.category].some((f) => f.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <section className="bg-sand">
      <div className="container-section py-12">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-charcoal">Products</h1>
            <p className="mt-1 text-sm text-gray-600">Explore our full catalog</p>
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="search" className="sr-only">Search</label>
            <input
              id="search"
              type="text"
              placeholder="Search by name or category..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-md border border-black/10 bg-white px-4 py-2 text-sm shadow-sm outline-none ring-brown-700/20 transition focus:ring"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-6 text-sm text-gray-600">No products found.</p>
        )}
      </div>
    </section>
  )
}