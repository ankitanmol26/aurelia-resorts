"use client";

import { LogOut } from "lucide-react";
import { logout } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
    router.refresh();
  };

  return (
    <button 
      onClick={handleLogout}
      className="flex items-center gap-3 px-4 py-3 w-full text-left text-accent hover:text-white transition-colors"
    >
      <LogOut className="w-5 h-5" />
      <span className="text-sm font-medium tracking-wide">Secure Logout</span>
    </button>
  );
}
