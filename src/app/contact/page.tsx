import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40eb0d8d73?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Aurelia Resorts"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <div className="relative z-20 text-center px-6">
          <span className="uppercase tracking-[0.4em] text-accent text-sm font-semibold mb-6 block">
            Get In Touch
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-light mb-12">
            Our dedicated concierge team is available 24/7 to assist with your reservations, special requests, and inquiries.
          </p>
          <Link href="/" className="btn-primary inline-block px-10 py-4">
            Return Home
          </Link>
        </div>
      </section>
    </div>
  );
}
