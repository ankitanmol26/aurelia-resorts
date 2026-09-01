import fs from "fs/promises";
import path from "path";
import type { Room } from "./rooms";
import type { Offer } from "./offers";

export async function getRooms(): Promise<Room[]> {
  try {
    const filePath = path.join(process.cwd(), "src/data/rooms.json");
    const jsonData = await fs.readFile(filePath, "utf8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading rooms:", error);
    return [];
  }
}

export async function saveRooms(rooms: Room[]): Promise<boolean> {
  try {
    const filePath = path.join(process.cwd(), "src/data/rooms.json");
    await fs.writeFile(filePath, JSON.stringify(rooms, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error saving rooms:", error);
    return false;
  }
}

export async function getOffers(): Promise<Offer[]> {
  try {
    const filePath = path.join(process.cwd(), "src/data/offers.json");
    const jsonData = await fs.readFile(filePath, "utf8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading offers:", error);
    return [];
  }
}

export async function saveOffers(offers: Offer[]): Promise<boolean> {
  try {
    const filePath = path.join(process.cwd(), "src/data/offers.json");
    await fs.writeFile(filePath, JSON.stringify(offers, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error saving offers:", error);
    return false;
  }
}
