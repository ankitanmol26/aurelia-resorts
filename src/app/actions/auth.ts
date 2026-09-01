"use server";

import { cookies } from "next/headers";

const ADMIN_PASSWORD = "aurelia567";
const COOKIE_NAME = "aurelia_admin_auth";

export async function login(password: string) {
  if (password === ADMIN_PASSWORD) {
    // Set a secure HTTP-only cookie that expires in 1 day
    const cookieStore = await cookies();
    cookieStore.set({
      name: COOKIE_NAME,
      value: "authenticated",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });
    return { success: true };
  } else {
    return { success: false, message: "Invalid password." };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  return { success: true };
}
