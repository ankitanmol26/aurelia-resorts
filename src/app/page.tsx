import Image from "next/image";
import Link from "next/link";
import { Compass, KeyRound, UserRound, Sparkles, MapPin, Plane, Car, Navigation } from "lucide-react";
import RoomCard from "@/components/features/RoomCard";
import HighlightCard from "@/components/features/HighlightCard";
import OfferCard from "@/components/features/OfferCard";
import { getRooms, getOffers } from "@/lib/api";

export default async function Home() {
  const rooms = await getRooms();
  const offers = await getOffers();
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black/80">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2500&q=80"
            alt="Luxury Resort Pool at Dusk"
            fill
            priority
            className="object-cover opacity-80"
          />
          {/* Dark Gradient Overlay for Cinematic Feel and Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-background z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 mt-12 w-full max-w-5xl animate-fade-in-up opacity-0">
          <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold mb-6">
            PREMIUM HOSPITALITY • WORLD-CLASS EXPERIENCES
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] tracking-wide text-white">
            Luxury Stays,<br className="hidden md:block" /> Reimagined
          </h1>
          <p className="text-foreground-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover exceptional accommodations, curated experiences, and exclusive amenities designed for the modern luxury traveler.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <Link href="/book" className="btn-primary w-full sm:w-auto text-center block">Book Your Stay</Link>
            <Link href="/rooms" className="btn-secondary w-full sm:w-auto text-center block">Explore Suites</Link>
          </div>
          
          {/* Trust Badge */}
          <div className="mt-16 flex flex-col items-center gap-2 mb-24 md:mb-0">
            <div className="flex text-accent text-lg" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <p className="text-xs tracking-widest uppercase text-foreground-secondary/80">
              Award Winning Luxury Experience
            </p>
            <p className="text-sm font-medium text-white/90">
              Trusted by 25,000+ happy guests
            </p>
          </div>
        </div>

        {/* Desktop Bottom Feature Row */}
        <div className="absolute bottom-0 w-full z-20 bg-background/30 backdrop-blur-md border-t border-white/10 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-xs uppercase tracking-[0.2em] text-white/80 font-medium">
            <span>World-Class Service</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-50"></span>
            <span>Private Escapes</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-50"></span>
            <span>Gourmet Dining</span>
            <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-50"></span>
            <span>Wellness & Relaxation</span>
          </div>
        </div>

        {/* Mobile Bottom Feature Row (Redesigned for smaller screens) */}
        <div className="absolute bottom-0 w-full z-20 bg-gradient-to-t from-background via-background/90 to-transparent pt-12 pb-8 md:hidden">
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-center text-[10px] uppercase tracking-[0.2em] text-white/80 px-6">
            <div className="flex flex-col items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              World-Class Service
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              Private Escapes
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              Gourmet Dining
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              Wellness & Relaxation
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Column */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:mx-0 group">
              {/* Decorative Gold Element (Offset Border) */}
              <div className="absolute -inset-4 border border-accent/30 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 hidden md:block" />
              
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
                alt="Luxurious Resort Suite Details"
                fill
                className="object-cover relative z-10 brightness-90 transition-all duration-700 group-hover:brightness-100"
              />
            </div>

            {/* Content Column */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Decorative Gold Dash */}
              <div className="w-12 h-[2px] bg-accent mb-8 hidden lg:block" />
              
              <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold mb-6">
                THE AURELIA EXPERIENCE
              </span>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.15] tracking-wide text-white">
                Where Elegance <br className="hidden xl:block" /> Meets the Infinite
              </h2>
              
              <p className="text-foreground-secondary text-lg leading-relaxed mb-10 max-w-lg">
                Step into a world crafted for the discerning traveler. At Aurelia Resorts, every detail is meticulously designed to harmonize with nature while providing uncompromising luxury. Leave the ordinary behind and discover your personal sanctuary.
              </p>
              
              <Link href="/about" className="btn-secondary">
                Discover the Aurelia Experience
              </Link>
            </div>
            
          </div>
        </div>
      </section>
      {/* Rooms & Suites Section */}
      <section className="py-24 md:py-32 bg-background border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold mb-6">
              ACCOMMODATIONS
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              Exceptional Retreats
            </h2>
            <p className="text-foreground-secondary text-lg max-w-2xl">
              Each of our meticulously designed suites offers a sanctuary of peace, featuring bespoke furnishings, breathtaking views, and uncompromising comfort.
            </p>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.filter(room => room.featured).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          
          {/* View All CTA */}
          <div className="mt-16 text-center">
            <Link href="/rooms" className="btn-ghost border-b border-accent/50 pb-1 rounded-none px-0 tracking-[0.2em] hover:border-accent inline-block">
              View All Suites
            </Link>
          </div>
        </div>
      </section>

      {/* Resort Highlights */}
      <section className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <div>
              <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold mb-6 block">
                RESORT HIGHLIGHTS
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Elevating <br className="hidden md:block" /> Every Moment
              </h2>
            </div>
            <p className="text-foreground-secondary text-lg max-w-md pb-2">
              Experience a world where every detail is meticulously curated to provide the ultimate expression of luxury.
            </p>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:auto-rows-[400px]">
            
            {/* 1. Infinity Pool (Large, spans 8 cols) */}
            <HighlightCard 
              title="Infinity Pool" 
              image="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80" 
              size="large"
              className="lg:col-span-8 min-h-[400px]"
            />

            {/* 2. Private Beach (Small, spans 4 cols) */}
            <HighlightCard 
              title="Private Beach" 
              image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              className="lg:col-span-4 min-h-[400px]"
            />

            {/* 3. Ocean View Rooms (Small, spans 4 cols) */}
            <HighlightCard 
              title="Ocean View Rooms" 
              image="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"
              className="lg:col-span-4 min-h-[400px]"
            />

            {/* 4. Amenities Text Block (Spans 8 cols) */}
            <div className="lg:col-span-8 bg-background p-8 md:p-12 border border-white/5 flex flex-col justify-center min-h-[400px]">
              <h3 className="font-serif text-2xl text-white mb-10">Signature Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-foreground-secondary font-medium tracking-wide">24/7 Concierge</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-foreground-secondary font-medium tracking-wide">Private Transfer</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-foreground-secondary font-medium tracking-wide">High-Speed Wi-Fi</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-foreground-secondary font-medium tracking-wide">Room Service</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-foreground-secondary font-medium tracking-wide">Complimentary Breakfast</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Aurelia Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sticky Left Column */}
            <div className="lg:col-span-4 relative">
              <div className="lg:sticky lg:top-32 flex flex-col">
                <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold mb-6 block">
                  THE AURELIA DIFFERENCE
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                  Beyond <br className="hidden lg:block"/> Expectation
                </h2>
                <p className="text-foreground-secondary text-lg leading-relaxed max-w-sm mb-12">
                  Aurelia Resorts redefines the art of hospitality, creating sanctuaries where unparalleled service meets extraordinary environments.
                </p>
                <div className="hidden lg:block w-full h-[1px] bg-gradient-to-r from-accent/50 to-transparent" />
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:col-span-8 flex flex-col gap-12 md:gap-0">
              
              {/* Feature 1 */}
              <div className="relative group md:border-t border-white/5 md:py-20 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start transition-all duration-700 hover:bg-white/[0.02] md:px-12 -mx-6 px-6 md:mx-0">
                <div className="absolute top-0 right-8 -translate-y-1/2 md:translate-y-0 md:top-12 text-8xl md:text-9xl font-serif text-white/[0.02] select-none pointer-events-none font-bold group-hover:text-accent/[0.05] transition-colors duration-700">
                  01
                </div>
                <div className="sm:w-1/4 pt-2">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-background-secondary group-hover:border-accent/50 group-hover:scale-110 transition-all duration-700">
                     <Compass className="w-6 h-6 text-accent stroke-[1.5]" />
                  </div>
                </div>
                <div className="sm:w-3/4 relative z-10">
                  <h3 className="font-serif text-3xl text-white mb-4 group-hover:text-accent transition-colors duration-700">Unforgettable Locations</h3>
                  <p className="text-foreground-secondary text-lg leading-relaxed max-w-md">
                    Properties surrounded by exceptional natural beauty, carefully selected to provide the perfect backdrop for your stay.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative group border-t border-white/5 md:py-20 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start transition-all duration-700 hover:bg-white/[0.02] md:px-12 -mx-6 px-6 md:mx-0">
                <div className="absolute top-0 right-8 -translate-y-1/2 md:translate-y-0 md:top-12 text-8xl md:text-9xl font-serif text-white/[0.02] select-none pointer-events-none font-bold group-hover:text-accent/[0.05] transition-colors duration-700">
                  02
                </div>
                <div className="sm:w-1/4 pt-2">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-background-secondary group-hover:border-accent/50 group-hover:scale-110 transition-all duration-700">
                     <KeyRound className="w-6 h-6 text-accent stroke-[1.5]" />
                  </div>
                </div>
                <div className="sm:w-3/4 relative z-10">
                  <h3 className="font-serif text-3xl text-white mb-4 group-hover:text-accent transition-colors duration-700">Exceptional Privacy</h3>
                  <p className="text-foreground-secondary text-lg leading-relaxed max-w-md">
                    Carefully designed spaces for peaceful and private stays, ensuring absolute discretion and serenity.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative group border-t border-white/5 md:py-20 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start transition-all duration-700 hover:bg-white/[0.02] md:px-12 -mx-6 px-6 md:mx-0">
                <div className="absolute top-0 right-8 -translate-y-1/2 md:translate-y-0 md:top-12 text-8xl md:text-9xl font-serif text-white/[0.02] select-none pointer-events-none font-bold group-hover:text-accent/[0.05] transition-colors duration-700">
                  03
                </div>
                <div className="sm:w-1/4 pt-2">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-background-secondary group-hover:border-accent/50 group-hover:scale-110 transition-all duration-700">
                     <UserRound className="w-6 h-6 text-accent stroke-[1.5]" />
                  </div>
                </div>
                <div className="sm:w-3/4 relative z-10">
                  <h3 className="font-serif text-3xl text-white mb-4 group-hover:text-accent transition-colors duration-700">Personalized Service</h3>
                  <p className="text-foreground-secondary text-lg leading-relaxed max-w-md">
                    Dedicated hospitality with meticulous attention to individual guest needs, anticipating your desires before they arise.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="relative group border-t border-b border-white/5 md:py-20 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start transition-all duration-700 hover:bg-white/[0.02] md:px-12 -mx-6 px-6 md:mx-0">
                <div className="absolute top-0 right-8 -translate-y-1/2 md:translate-y-0 md:top-12 text-8xl md:text-9xl font-serif text-white/[0.02] select-none pointer-events-none font-bold group-hover:text-accent/[0.05] transition-colors duration-700">
                  04
                </div>
                <div className="sm:w-1/4 pt-2">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-background-secondary group-hover:border-accent/50 group-hover:scale-110 transition-all duration-700">
                     <Sparkles className="w-6 h-6 text-accent stroke-[1.5]" />
                  </div>
                </div>
                <div className="sm:w-3/4 relative z-10">
                  <h3 className="font-serif text-3xl text-white mb-4 group-hover:text-accent transition-colors duration-700">Effortless Luxury</h3>
                  <p className="text-foreground-secondary text-lg leading-relaxed max-w-md">
                    Everything guests need for a comfortable and seamless stay, refined to the highest standards of excellence.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-24 md:py-32 bg-background border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold mb-6">
              CURATED PACKAGES
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Exclusive Offers
            </h2>
            <p className="text-foreground-secondary text-lg max-w-2xl">
              Elevate your stay with our thoughtfully designed packages, providing exceptional value for those who book directly with us.
            </p>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {offers.map((offer, index) => (
              <OfferCard key={offer.id} offer={offer} reverse={index % 2 !== 0} />
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <Link href="/offers" className="btn-primary px-10 inline-block">
              View All Offers
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left: Info */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold mb-6 block">
                LOCATION & ACCESS
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                Find Your <br className="hidden md:block"/> Escape
              </h2>
              <p className="text-foreground-secondary text-lg leading-relaxed mb-12">
                A secluded coastal retreat surrounded by natural beauty, just minutes from the region's most memorable destinations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Plane className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">International Airport</h4>
                    <p className="text-foreground-secondary text-sm">45 minutes drive (Private transfer available)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Car className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Historic Old Town</h4>
                    <p className="text-foreground-secondary text-sm">15 minutes scenic coastal drive</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Navigation className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Luxury Marina</h4>
                    <p className="text-foreground-secondary text-sm">10 minutes by complimentary shuttle</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Resort Coordinates</h4>
                    <p className="text-foreground-secondary text-sm">38°42'N 9°08'W</p>
                  </div>
                </div>

              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/rooms" className="btn-primary w-full sm:w-auto text-center block">
                  Plan Your Stay
                </Link>
                <Link href="/contact" className="btn-ghost border border-white/20 hover:border-white/40 w-full sm:w-auto px-8 py-3 tracking-widest uppercase text-xs text-center block">
                  Get Directions
                </Link>
              </div>

            </div>

            {/* Right: Map Placeholder */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full group overflow-hidden border border-white/10 bg-background">
                {/* Coastal map-like texture / image */}
                <Image
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
                  alt="Aurelia Resorts Location"
                  fill
                  className="object-cover opacity-60 transition-transform duration-[2s] group-hover:scale-105"
                />
                
                {/* Vignette for luxury map feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/20" />
                
                {/* Custom Map Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  
                  {/* Pulse effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent/20 rounded-full animate-ping duration-1000" />
                  
                  {/* Pin Circle */}
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center relative z-10 shadow-2xl">
                    <div className="w-3 h-3 bg-background rounded-full" />
                  </div>
                  
                  {/* Info Box */}
                  <div className="mt-4 bg-background/90 backdrop-blur-md border border-white/10 px-6 py-3 rounded-none text-center transform transition-transform duration-500 group-hover:-translate-y-2 relative z-10 shadow-2xl">
                    <p className="text-white font-serif tracking-wider text-sm whitespace-nowrap">AURELIA RESORTS</p>
                    <p className="text-accent text-[10px] tracking-widest mt-1">YOUR DESTINATION</p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final Booking CTA */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden border-t border-white/5">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/oceanfront_suite.jpg"
            alt="Aurelia Resorts Luxury Experience"
            fill
            className="object-cover transition-transform duration-[3s] hover:scale-105"
          />
          {/* Dark gradient overlay for text readability and moody cinematic feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-black/70 to-background z-10" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <span className="uppercase tracking-[0.4em] text-accent text-xs font-semibold mb-8 block">
            YOUR PRIVATE ESCAPE AWAITS
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8 drop-shadow-2xl">
            Stay Somewhere <br className="hidden md:block"/> Extraordinary.
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-14 font-light">
            Discover refined rooms, exceptional service, and unforgettable moments at Aurelia Resorts.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full sm:w-auto">
            <Link href="/book" className="btn-primary w-full sm:w-auto px-12 py-4 text-sm font-semibold text-center block">
              Book Your Stay
            </Link>
            <Link href="/rooms" className="btn-ghost border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm w-full sm:w-auto px-12 py-4 tracking-widest uppercase text-xs text-white text-center block">
              Explore Rooms
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/50 text-[10px] tracking-widest uppercase font-semibold">
            <span>Best Rate Guaranteed</span>
            <span className="hidden sm:block text-accent">♦</span>
            <span>Flexible Booking</span>
            <span className="hidden sm:block text-accent">♦</span>
            <span>24/7 Guest Support</span>
          </div>
        </div>
      </section>
    </>
  );
}
