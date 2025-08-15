export default function ProductCard({ product }) {
  return (
    <div className="card group overflow-hidden">
      <div className="relative aspect-square w-full overflow-hidden bg-beige">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded bg-brown-700 px-2 py-1 text-xs font-medium text-white">
            {product.badge}
          </span>
        )}
      </div>
      <div className="space-y-1 p-4">
        <h3 className="text-base font-semibold text-charcoal">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-semibold text-brown-700">${product.price}</span>
          <button className="rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-medium text-charcoal transition hover:bg-sand">Add to cart</button>
        </div>
      </div>
    </div>
  )
}