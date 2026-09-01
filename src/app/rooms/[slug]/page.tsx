import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRooms } from "@/lib/api";
import { ArrowLeft, Maximize, Users } from "lucide-react";

export async function generateStaticParams() {
  const rooms = await getRooms();
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export default async function RoomDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const rooms = await getRooms();
  const room = rooms.find((r) => r.slug === resolvedParams.slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link 
          href="/rooms" 
          className="inline-flex items-center gap-2 text-foreground-secondary hover:text-accent transition-colors uppercase tracking-widest text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Accommodations
        </Link>
      </div>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden border border-white/5">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Room Details Content */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Info */}
          <div className="w-full lg:w-2/3">
            <span className="text-accent text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 block">
              {room.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              {room.name}
            </h1>
            
            <div className="flex items-center gap-8 mb-12 border-b border-white/10 pb-8 text-foreground-secondary">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm">Up to {room.capacity} Guests</span>
              </div>
              <div className="flex items-center gap-3">
                <Maximize className="w-5 h-5 text-accent" />
                <span className="text-sm">{room.size}</span>
              </div>
            </div>

            <h3 className="text-white font-serif text-2xl mb-6">About this Sanctuary</h3>
            <p className="text-foreground-secondary leading-relaxed text-lg mb-12">
              {room.description}
            </p>

            <h3 className="text-white font-serif text-2xl mb-6">Premium Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-foreground-secondary text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-background-secondary border border-white/10 p-8 sticky top-32">
              <p className="text-foreground-secondary text-sm uppercase tracking-widest mb-2">Starting from</p>
              <p className="text-white text-4xl font-serif mb-8">
                ₹{room.price.toLocaleString("en-IN")} <span className="text-sm font-sans text-foreground-secondary font-light">/ night</span>
              </p>
              
              <Link href="/contact" className="btn-primary w-full text-center block py-4 mb-4">
                Reserve Now
              </Link>
              
              <p className="text-center text-xs text-foreground-secondary italic">
                Best price guarantee when you book directly with us.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
