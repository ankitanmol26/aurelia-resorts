import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=80"
            alt="About Aurelia Resorts"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </div>
        <div className="relative z-20 text-center px-6">
          <span className="uppercase tracking-[0.4em] text-accent text-sm font-semibold mb-6 block">
            Our Story
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            About Aurelia
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-light mb-12">
            Aurelia Resorts was born from a singular vision: to redefine luxury hospitality through exceptional design, personalized service, and a deep connection to nature.
          </p>
          <Link href="/" className="btn-primary inline-block px-10 py-4">
            Return Home
          </Link>
        </div>
      </section>
    </div>
  );
}
