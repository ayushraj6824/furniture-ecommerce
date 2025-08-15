import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-section py-10">
        <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} FurniStore. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link to="/about" className="hover:text-brown-700">About</Link>
            <Link to="/contact" className="hover:text-brown-700">Contact</Link>
            <a href="https://vercel.com" target="_blank" rel="noreferrer" className="hover:text-brown-700">Vercel</a>
            <a href="https://www.netlify.com" target="_blank" rel="noreferrer" className="hover:text-brown-700">Netlify</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}