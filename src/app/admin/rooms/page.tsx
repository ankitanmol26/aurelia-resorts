import { getRooms } from "@/lib/api";
import EditRoomModal from "@/components/admin/EditRoomModal";
import AddRoomModal from "@/components/admin/AddRoomModal";

export default async function AdminRoomsPage() {
  const rooms = await getRooms();

  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-serif text-white mb-2">Rooms Management</h1>
          <p className="text-foreground-secondary">Edit your accommodations, pricing, and details.</p>
        </div>
        <AddRoomModal />
      </div>

      <div className="bg-background-secondary border border-white/5 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-black/40">
                <th className="px-6 py-4 text-xs tracking-widest uppercase text-foreground-secondary font-medium">Room Name</th>
                <th className="px-6 py-4 text-xs tracking-widest uppercase text-foreground-secondary font-medium">Category</th>
                <th className="px-6 py-4 text-xs tracking-widest uppercase text-foreground-secondary font-medium">Price (INR)</th>
                <th className="px-6 py-4 text-xs tracking-widest uppercase text-foreground-secondary font-medium">Capacity</th>
                <th className="px-6 py-4 text-xs tracking-widest uppercase text-foreground-secondary font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rooms.map((room) => (
                <tr key={room.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-white font-medium">{room.name}</p>
                    <p className="text-xs text-foreground-secondary">{room.slug}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground-secondary">{room.category}</td>
                  <td className="px-6 py-4 text-sm text-white font-medium">₹{room.price.toLocaleString("en-IN")}</td>
                  <td className="px-6 py-4 text-sm text-foreground-secondary">{room.capacity} Guests</td>
                  <td className="px-6 py-4 text-right">
                    <EditRoomModal room={room} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
