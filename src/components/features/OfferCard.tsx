import Image from "next/image";
import Link from "next/link";
import { Offer } from "@/data/offers";

interface OfferCardProps {
  offer: Offer;
  reverse?: boolean;
}

export default function OfferCard({ offer, reverse = false }: OfferCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 group`}>
      
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000 z-10" />
          <Image
            src={offer.image}
            alt={offer.title}
            fill
            className="object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <span className="text-accent text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 block">
          Exclusive Offer
        </span>
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
          {offer.title}
        </h3>
        <p className="text-foreground-secondary text-lg leading-relaxed mb-10 max-w-lg">
          {offer.description}
        </p>

        <div className="bg-background-secondary p-8 md:p-10 border border-white/5 mb-10 max-w-lg">
          <p className="text-white text-xs uppercase tracking-widest font-semibold mb-6 border-b border-white/10 pb-4">
            Offer Details
          </p>
          <ul className="space-y-4 mb-8">
            {offer.details.map((detail, idx) => (
              <li key={idx} className="text-foreground-secondary text-sm flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/50 text-xs italic">
            * {offer.validity}
          </p>
        </div>

        <div>
          <Link href="/offers" className="btn-ghost border-b border-accent/50 pb-1 rounded-none px-0 tracking-[0.2em] hover:border-accent text-sm uppercase inline-block">
            View Offer Details
          </Link>
        </div>
      </div>

    </div>
  );
}
