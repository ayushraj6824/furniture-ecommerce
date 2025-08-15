import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-beige">
      <div className="container-section grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            Elevate your space with timeless furniture
          </h1>
          <p className="max-w-prose text-base text-gray-700">
            Discover curated pieces crafted with quality materials. Comfort, style, and durability—designed to fit modern living.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/products" className="btn-primary">Shop Now</Link>
            <Link to="/about" className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-5 py-3 font-medium text-charcoal shadow-sm transition hover:bg-sand">
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1200&auto=format&fit=crop"
              alt="Modern living room furniture"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}