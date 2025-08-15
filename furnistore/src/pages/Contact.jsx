export default function Contact() {
  return (
    <section className="bg-sand">
      <div className="container-section py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-charcoal">Contact Us</h1>
            <p className="mt-2 text-gray-700">We'd love to hear from you. Send us a message and we'll respond shortly.</p>
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal">Name</label>
                <input id="name" type="text" className="mt-1 w-full rounded-md border border-black/10 bg-white px-4 py-2 text-sm shadow-sm outline-none ring-brown-700/20 transition focus:ring" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal">Email</label>
                <input id="email" type="email" className="mt-1 w-full rounded-md border border-black/10 bg-white px-4 py-2 text-sm shadow-sm outline-none ring-brown-700/20 transition focus:ring" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal">Message</label>
                <textarea id="message" rows="4" className="mt-1 w-full rounded-md border border-black/10 bg-white px-4 py-2 text-sm shadow-sm outline-none ring-brown-700/20 transition focus:ring" placeholder="How can we help?" />
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
              <div className="flex h-full w-full items-center justify-center bg-beige text-gray-600">
                <span>Map placeholder</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">123 Modern Ave, Design City</p>
          </div>
        </div>
      </div>
    </section>
  )
}