export default function About() {
  return (
    <section className="bg-white">
      <div className="container-section py-12">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl font-bold text-charcoal">About FurniStore</h1>
          <p className="text-gray-700">
            At FurniStore, we believe your home should be a sanctuary. We curate timeless, durable furniture with a focus on craftsmanship and sustainable materials. Our collection blends modern aesthetics with everyday functionality.
          </p>
          <div className="rounded-lg border border-black/5 bg-sand p-6">
            <h2 className="text-xl font-semibold text-charcoal">Our Mission</h2>
            <p className="mt-2 text-gray-700">
              To elevate living spaces with accessible, thoughtfully designed pieces, produced responsibly and delivered with exceptional service.
            </p>
          </div>
          <p className="text-gray-700">
            From sofas to lighting, every product is handpicked and tested for quality. We partner with responsible manufacturers and prioritize eco-friendly packaging.
          </p>
        </div>
      </div>
    </section>
  )
}