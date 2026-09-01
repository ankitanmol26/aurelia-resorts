"use server";

import { revalidatePath } from "next/cache";
import { saveRooms, getRooms } from "@/lib/api";
import { Room } from "@/data/rooms";

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
