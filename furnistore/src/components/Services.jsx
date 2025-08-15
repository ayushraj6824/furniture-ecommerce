const services = [
  {
    title: 'Free Delivery',
    description: 'Enjoy complimentary shipping on all orders in select regions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-brown-700"><path d="M1.5 3a.75.75 0 000 1.5h1.31l.81 7.29a2.25 2.25 0 002.24 2.01H18a2.25 2.25 0 002.25-2.25V8.25a.75.75 0 00-.75-.75H7.28l-.36-3.26A1.5 1.5 0 005.43 3H1.5z"/><path d="M16.5 18.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM8.25 18.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>
    ),
  },
  {
    title: '24/7 Support',
    description: 'Our team is here to help you anytime via chat or email.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-brown-700"><path fillRule="evenodd" d="M5.25 4.5A2.25 2.25 0 003 6.75v6A2.25 2.25 0 005.25 15h2.072l2.592 2.592A1.5 1.5 0 0012 16.5V15h6.75A2.25 2.25 0 0021 12.75v-6A2.25 2.25 0 0018.75 4.5H5.25z" clipRule="evenodd"/></svg>
    ),
  },
  {
    title: 'Secure Payment',
    description: 'Checkout with confidence using encrypted payment methods.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-brown-700"><path fillRule="evenodd" d="M12 1.5a4.5 4.5 0 00-4.5 4.5V9H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1.5V6A4.5 4.5 0 0012 1.5zM9 9V6a3 3 0 016 0v3H9z" clipRule="evenodd"/></svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="bg-white">
      <div className="container-section py-14">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-charcoal">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}