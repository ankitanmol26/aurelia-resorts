import Image from "next/image";
import type { Room } from "@/data/rooms";
import Link from "next/link";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="group bg-background-secondary border border-white/5 overflow-hidden flex flex-col h-full transition-colors duration-500 hover:border-accent/30">
      {/* Image Container */}
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      {/* Content Container */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 className="font-serif text-2xl text-white leading-tight">{room.name}</h3>
          <span className="text-accent text-lg font-serif whitespace-nowrap">
            From ₹{room.price.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Info Row: Capacity & Size */}
        <div className="flex gap-3 text-[10px] text-foreground-secondary mb-5 font-medium tracking-widest uppercase">
          <span>{room.capacity} Guests</span>
          <span>•</span>
          <span>{room.size} SQM</span>
        </div>
        
        <p className="text-foreground-secondary text-sm leading-relaxed mb-6 flex-grow">
          {room.description}
        </p>
        
        {/* Amenities */}
        <div className="mb-8">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] uppercase tracking-wider text-foreground-secondary/70">
            {room.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-accent rounded-full opacity-60"></span>
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA */}
        <Link href={`/rooms/${room.slug}`} className="btn-secondary text-center w-full mt-auto block">
          View Suite
        </Link>
      </div>
    </div>
  );
}
