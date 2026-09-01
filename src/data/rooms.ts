export type RoomCategory = "Suite" | "Villa" | "Penthouse";

export interface Room {
  id: string;
  slug: string;
  name: string;
  category: RoomCategory;
  description: string;
  price: number;
  capacity: number;
  size: number;
  image: string;
  amenities: string[];
  featured: boolean;
}

