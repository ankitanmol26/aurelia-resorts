import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background-secondary pt-24 pb-12 border-t border-white/5 text-foreground-secondary">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-20 border-b border-white/5">
          <div className="w-full md:w-1/2">
            <h3 className="font-serif text-3xl text-white mb-4">Stay Connected</h3>
            <p className="text-lg">Receive our latest offers and private escapes.</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <form className="w-full max-w-md relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/30"
                required
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 bottom-4 text-white/50 group-hover:text-accent transition-colors flex items-center gap-2 uppercase tracking-widest text-xs font-semibold"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-20">
          
          {/* Brand */}
          <div className="lg:col-span-4 pr-8">
            <h2 className="font-serif text-3xl text-white mb-2">Aurelia Resorts</h2>
            <p className="text-accent text-xs uppercase tracking-widest mb-8">Luxury, Reimagined.</p>
            <p className="leading-relaxed">
              Experience the pinnacle of luxury and serenity. Our resorts are designed to provide an unforgettable escape from the ordinary.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-accent transition-colors">Rooms & Suites</Link></li>
              <li><Link href="/offers" className="hover:text-accent transition-colors">Offers</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Guest Information */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Guest Information</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/policies" className="hover:text-accent transition-colors">Check-in: 3:00 PM</Link></li>
              <li><Link href="/policies" className="hover:text-accent transition-colors">Check-out: 12:00 PM</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Reservations</Link></li>
              <li><Link href="/policies" className="hover:text-accent transition-colors">Policies</Link></li>
              <li><Link href="/policies" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="tel:+18001234567" className="hover:text-accent transition-colors">+1 (800) 123-4567</a></li>
              <li><a href="mailto:info@aureliaresorts.com" className="hover:text-accent transition-colors">info@aureliaresorts.com</a></li>
              <li className="pt-2 leading-relaxed">
                100 Coastal Highway<br />
                Aurelia Peninsula, 90210
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Legal & Social */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-xs">
          
          <div className="flex flex-col gap-2">
            <p>&copy; 2026 Aurelia Resorts. All rights reserved.</p>
            <p className="text-white/40">
              Designed & Built by{" "}
              <a href="https://github.com/ankitanmol26" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors">Ankit Kumar Singh</a>
              {" "}at VR1 |{" "}
              <a href="https://www.linkedin.com/in/ankit-kumar-singh-026b16326/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="/policies" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/policies" className="hover:text-accent transition-colors">Terms & Conditions</Link>
            <Link href="/policies" className="hover:text-accent transition-colors">Cancellation Policy</Link>
          </div>

          <div className="flex items-center gap-6 text-white">
            <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-accent transition-colors" aria-label="YouTube">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
