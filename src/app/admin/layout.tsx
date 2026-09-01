import Link from "next/link";
import { LayoutDashboard, BedDouble, Tag, Settings } from "lucide-react";
import LogoutButton from "@/components/admin/LogoutButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-background-secondary border-r border-white/5 flex flex-col">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">Admin</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-foreground-secondary hover:text-white hover:bg-white/5 rounded transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide">Dashboard</span>
          </Link>
          <Link href="/admin/rooms" className="flex items-center gap-3 px-4 py-3 text-foreground-secondary hover:text-white hover:bg-white/5 rounded transition-colors">
            <BedDouble className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide">Rooms</span>
          </Link>
          <Link href="/admin/offers" className="flex items-center gap-3 px-4 py-3 text-foreground-secondary hover:text-white hover:bg-white/5 rounded transition-colors">
            <Tag className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide">Offers</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-foreground-secondary hover:text-white hover:bg-white/5 rounded transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide">Settings</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/5">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-black/20 p-8 md:p-12">
        {children}
      </main>
    </div>
  );
}
