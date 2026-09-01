import { getRooms, getOffers } from "@/lib/api";
import Link from "next/link";

export default async function AdminDashboard() {
  const rooms = await getRooms();
  const offers = await getOffers();

  return (
    <div>
      <h1 className="text-3xl font-serif text-white mb-2">Welcome to Dashboard</h1>
      <p className="text-foreground-secondary mb-12">Manage your luxury resort content seamlessly.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Card */}
        <div className="bg-background-secondary border border-white/5 p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-foreground-secondary text-sm tracking-widest uppercase mb-4">Total Rooms</h3>
            <p className="text-4xl text-white font-serif mb-6">{rooms.length}</p>
          </div>
          <Link href="/admin/rooms" className="text-xs uppercase tracking-widest text-accent hover:text-white transition-colors">
            Manage Rooms &rarr;
          </Link>
        </div>
        
        <div className="bg-background-secondary border border-white/5 p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-foreground-secondary text-sm tracking-widest uppercase mb-4">Active Offers</h3>
            <p className="text-4xl text-white font-serif mb-6">{offers.length}</p>
          </div>
          <Link href="/admin/offers" className="text-xs uppercase tracking-widest text-accent hover:text-white transition-colors">
            Manage Offers &rarr;
          </Link>
        </div>
        
        <div className="bg-background-secondary border border-white/5 p-6 rounded-lg">
          <h3 className="text-foreground-secondary text-sm tracking-widest uppercase mb-4">New Bookings</h3>
          <p className="text-4xl text-white font-serif">12</p>
        </div>
      </div>
    </div>
  );
}
