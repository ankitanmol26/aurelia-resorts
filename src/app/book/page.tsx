import Image from "next/image";
import Link from "next/link";

export default function BookPage() {
  return (
    <div className="min-h-screen pt-24 bg-background">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.4em] text-accent text-sm font-semibold mb-6 block">
            Reservations
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Book Your Stay
          </h1>
          <p className="text-white/80 text-lg font-light">
            Secure your sanctuary. Fill out the details below and our concierge will confirm your reservation.
          </p>
        </div>

        <div className="bg-background-secondary border border-white/5 p-8 md:p-12">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Check In */}
              <div className="flex flex-col gap-2">
                <label className="text-foreground-secondary text-xs uppercase tracking-widest">Check-in Date</label>
                <input type="date" className="bg-background border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent" />
              </div>
              
              {/* Check Out */}
              <div className="flex flex-col gap-2">
                <label className="text-foreground-secondary text-xs uppercase tracking-widest">Check-out Date</label>
                <input type="date" className="bg-background border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent" />
              </div>
              
              {/* Guests */}
              <div className="flex flex-col gap-2">
                <label className="text-foreground-secondary text-xs uppercase tracking-widest">Guests</label>
                <select className="bg-background border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent appearance-none">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>

              {/* Room Type */}
              <div className="flex flex-col gap-2">
                <label className="text-foreground-secondary text-xs uppercase tracking-widest">Room Type</label>
                <select className="bg-background border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent appearance-none">
                  <option>Oceanfront Suite</option>
                  <option>Botanical Villa</option>
                  <option>Aurelia Penthouse</option>
                  <option>Any Available</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="text-foreground-secondary text-xs uppercase tracking-widest">First Name</label>
                <input type="text" placeholder="John" className="bg-background border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent" />
              </div>
              
              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label className="text-foreground-secondary text-xs uppercase tracking-widest">Last Name</label>
                <input type="text" placeholder="Doe" className="bg-background border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent" />
              </div>
              
              {/* Email */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-foreground-secondary text-xs uppercase tracking-widest">Email Address</label>
                <input type="email" placeholder="john@example.com" className="bg-background border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent" />
              </div>
            </div>

            <button type="button" className="btn-primary w-full py-4 text-center mt-8">
              Confirm Reservation
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
