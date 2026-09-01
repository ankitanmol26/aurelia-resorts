"use client";

import { useState } from "react";
import { Room } from "@/data/rooms";
import { updateRoom } from "@/app/actions/admin";
import { Plus, X } from "lucide-react";

export default function AddRoomModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  const emptyRoom: Room = {
    id: `room-${Date.now()}`,
    slug: "",
    name: "",
    category: "Suite",
    price: 0,
    size: 0,
    capacity: 2,
    description: "",
    amenities: [],
    image: "",
    featured: false
  };

  const [formData, setFormData] = useState<Room>(emptyRoom);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Auto-generate slug from name if empty
    const slug = formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    const formattedData = {
      ...formData,
      slug,
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
      setFormData({ ...emptyRoom, id: `room-${Date.now()}` }); // Reset for next use
    } else {
      alert("Failed to add room.");
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
        className="btn-primary px-6 py-3 text-sm flex items-center gap-2"
      >
        <Plus className="w-4 h-4" /> Add New Room
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-background border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative text-left">
            <div className="p-6 border-b border-white/5 flex justify-between items-center sticky top-0 bg-background z-10">
              <h2 className="text-xl font-serif text-white">Add New Room</h2>
              <button onClick={() => setIsOpen(false)} className="text-foreground-secondary hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-foreground-secondary">Room Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full" placeholder="e.g. Royal Suite" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-foreground-secondary">Price (INR)</label>
                  <input required type="number" name="price" value={formData.price || ""} onChange={handleChange} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full" placeholder="25000" />
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
                  <input required type="number" name="capacity" value={formData.capacity || ""} onChange={handleChange} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-foreground-secondary">Image URL</label>
                <input required name="image" value={formData.image} onChange={handleChange} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full" placeholder="/images/your-image.jpg" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-foreground-secondary">Description</label>
                <textarea required name="description" value={formData.description} onChange={handleChange} rows={3} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full resize-none" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-foreground-secondary">Amenities (Comma Separated)</label>
                <textarea name="amenities" value={typeof formData.amenities === 'object' ? formData.amenities.join(', ') : formData.amenities} onChange={handleChange} rows={2} className="bg-background-secondary border border-white/10 px-4 py-3 text-white text-sm focus:border-accent outline-none w-full resize-none" placeholder="Ocean View, Plunge Pool, Butler Service" />
              </div>

              <div className="flex justify-end gap-4 pt-6 border-t border-white/5 mt-8">
                <button type="button" onClick={() => setIsOpen(false)} className="px-6 py-3 text-sm text-foreground-secondary hover:text-white transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={isSaving} className="btn-primary px-8 py-3 text-sm flex items-center justify-center min-w-[120px]">
                  {isSaving ? "Adding..." : "Add Room"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
