import Image from "next/image";
import Link from "next/link";

export default function DiningPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=2000&q=80"
            alt="Dining at Aurelia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <div className="relative z-20 text-center px-6">
          <span className="uppercase tracking-[0.4em] text-accent text-sm font-semibold mb-6 block">
            Coming Soon
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            Exceptional Dining
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-light mb-12">
            A journey of culinary excellence awaits. Our chefs are preparing a menu of exquisite local and international flavors.
          </p>
          <Link href="/" className="btn-primary inline-block px-10 py-4">
            Return Home
          </Link>
        </div>
      </section>
    </div>
  );
}
