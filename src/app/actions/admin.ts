"use server";

import { revalidatePath } from "next/cache";
import { saveRooms, getRooms, saveOffers, getOffers } from "@/lib/api";
import { Room } from "@/data/rooms";
import { Offer } from "@/data/offers";

export async function updateRoom(roomData: Room) {
  try {
    const rooms = await getRooms();
    const index = rooms.findIndex((r) => r.id === roomData.id);
    
    if (index !== -1) {
      rooms[index] = roomData;
    } else {
      rooms.push(roomData);
    }
    
    await saveRooms(rooms);
    revalidatePath("/");
    revalidatePath("/rooms");
    revalidatePath(`/rooms/${roomData.slug}`);
    revalidatePath("/admin/rooms");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update room:", error);
    return { success: false, error: "Failed to update room" };
  }
}

export async function deleteRoom(id: string) {
  try {
    const rooms = await getRooms();
    const filteredRooms = rooms.filter((r) => r.id !== id);
    
    await saveRooms(filteredRooms);
    revalidatePath("/");
    revalidatePath("/rooms");
    revalidatePath("/admin/rooms");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete room:", error);
    return { success: false, error: "Failed to delete room" };
  }
}

export async function updateOffer(offerData: Offer) {
  try {
    const offers = await getOffers();
    const index = offers.findIndex((o) => o.id === offerData.id);
    
    if (index !== -1) {
      offers[index] = offerData;
    } else {
      offers.push(offerData);
    }
    
    await saveOffers(offers);
    revalidatePath("/");
    revalidatePath("/offers");
    revalidatePath("/admin/offers");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update offer:", error);
    return { success: false, error: "Failed to update offer" };
  }
}

export async function deleteOffer(id: string) {
  try {
    const offers = await getOffers();
    const filteredOffers = offers.filter((o) => o.id !== id);
    
    await saveOffers(filteredOffers);
    revalidatePath("/");
    revalidatePath("/offers");
    revalidatePath("/admin/offers");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete offer:", error);
    return { success: false, error: "Failed to delete offer" };
  }
}
