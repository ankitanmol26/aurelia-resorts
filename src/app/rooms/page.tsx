import Image from "next/image";
import { getRooms } from "@/lib/api";
import RoomCard from "@/components/features/RoomCard";

export default async function RoomsPage() {
  const rooms = await getRooms();
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89af14fb422?auto=format&fit=crop&w=2000&q=80"
            alt="Aurelia Resorts Accommodations"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 text-center px-6 mt-16">
          <span className="uppercase tracking-[0.4em] text-accent text-sm font-semibold mb-6 block">
            Aurelia Resorts
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            Accommodations
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-light">
            Discover a sanctuary of refined elegance. Every room and suite is thoughtfully designed to provide the ultimate in comfort, privacy, and panoramic views.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
