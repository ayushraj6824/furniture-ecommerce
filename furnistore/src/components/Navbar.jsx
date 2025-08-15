import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition hover:text-brown-700 ${
      isActive ? 'text-brown-700' : 'text-charcoal'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="container-section flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded bg-brown-700"></span>
          <span className="text-lg font-semibold tracking-wide">FurniStore</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="container-section flex flex-col py-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/products" className={navLinkClass}>Products</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}