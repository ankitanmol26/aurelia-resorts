"use client";

import { useState } from "react";
import { Room } from "@/data/rooms";
import { updateRoom } from "@/app/actions/admin";
import { Pencil, X } from "lucide-react";

export default function EditRoomModal({ room }: { room: Room }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Room>(room);
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Parse amenities if it's a comma separated string (handle form input)
    const formattedData = {
      ...formData,
      price: Number(formData.price),
      capacity: Number(formData.capacity),
      size: Number(formData.size),
      amenities: typeof formData.amenities === 'string' 
        ? (formData.amenities as string).split(',').map(a => a.trim()) 
        : formData.amenities
    };

    const res = await updateRoom(formattedData);
    if (res.success) {
      setIsOpen(false);
    } else {
      alert("Failed to save room.");
    }
    setIsSaving(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:text-white transition-colors"
      >
        <Pencil className="w-3 h-3" /> Edit
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-background border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative text-left">
            <div className="p-6 border-b border-white/5 flex justify-between items-center sticky top-0 bg-background z-10">
              <h2 className="text-xl font-serif text-white">Edit Room: {room.name}</h2>
              <button onClick={() => setIsOpen(false)} className="text-foreground-secondary hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-foreground-secondary">Room Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-foreground-secondary">Price (INR)</label>
                  <input required type="number" name="price" value={formData.price} onChange={handleChange} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-foreground-secondary">Category</label>
                  <select name="category" value={formData.category} onChange={handleChange} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full appearance-none">
                    <option value="Suite">Suite</option>
                    <option value="Villa">Villa</option>
                    <option value="Penthouse">Penthouse</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-foreground-secondary">Capacity (Guests)</label>
                  <input required type="number" name="capacity" value={formData.capacity} onChange={handleChange} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-foreground-secondary">Image URL</label>
                <input required name="image" value={formData.image} onChange={handleChange} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-foreground-secondary">Description</label>
                <textarea required name="description" value={formData.description} onChange={handleChange} rows={4} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full resize-none" />
              </div>

              <div className="flex justify-end gap-4 pt-6 border-t border-white/5 mt-8">
                <button type="button" onClick={() => setIsOpen(false)} className="px-6 py-3 text-sm text-foreground-secondary hover:text-white transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={isSaving} className="btn-primary px-8 py-3 text-sm flex items-center justify-center min-w-[120px]">
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
