import Image from "next/image";

interface HighlightCardProps {
  title: string;
  image: string;
  className?: string;
  size?: 'large' | 'small';
}

export default function HighlightCard({ title, image, className = "", size = "small" }: HighlightCardProps) {
  return (
    <div className={`relative group overflow-hidden border border-white/5 bg-background-secondary ${className}`}>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-700 z-10" />
      
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
      />
      
      <div className={`absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end ${size === 'large' ? 'md:p-12' : ''}`}>
        <h3 className={`font-serif text-white ${size === 'large' ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} mb-4`}>
          {title}
        </h3>
        <div className="w-12 h-[1px] bg-accent transition-all duration-700 group-hover:w-24 opacity-80" />
      </div>
    </div>
  );
}
