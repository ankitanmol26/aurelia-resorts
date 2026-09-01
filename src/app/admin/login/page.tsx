"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/actions/auth";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await login(password);
      if (res.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(res.message || "Invalid password");
        setIsLoading(false);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-md bg-background-secondary p-12 border border-white/5 shadow-2xl relative overflow-hidden">
        {/* Subtle Gold Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
        
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl text-white mb-2 tracking-wide">Aurelia Portal</h1>
          <p className="text-foreground-secondary text-sm uppercase tracking-widest">Admin Authentication</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground-secondary mb-3">
              Master Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary py-4 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Authenticating..." : "Access Dashboard"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <a href="/" className="text-xs text-foreground-secondary hover:text-white transition-colors uppercase tracking-widest">
            &larr; Return to Website
          </a>
        </div>
      </div>
    </div>
  );
}
