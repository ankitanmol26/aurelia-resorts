export default function AdminSettingsPage() {
  return (
    <div className="p-8">
      <h1 className="font-serif text-3xl text-white mb-2">Settings</h1>
      <p className="text-foreground-secondary text-sm mb-8">System configuration and preferences.</p>
      
      <div className="bg-background-secondary border border-white/10 rounded-lg p-6 max-w-2xl">
        <h2 className="text-xl text-white font-serif mb-4">General Configuration</h2>
        <p className="text-foreground-secondary text-sm mb-6">
          The Aurelia Resorts platform is currently running on the File-Based CMS mode. 
          All data is persisted in local JSON files for maximum performance and portability.
        </p>
        
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-foreground-secondary">Contact Email</label>
            <input type="text" disabled value="info@aureliaresorts.com" className="bg-background border border-white/10 px-4 py-3 text-white/50 text-sm outline-none w-full cursor-not-allowed" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-foreground-secondary">Base Currency</label>
            <input type="text" disabled value="INR (₹)" className="bg-background border border-white/10 px-4 py-3 text-white/50 text-sm outline-none w-full cursor-not-allowed" />
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
          <button disabled className="btn-primary px-6 py-2 opacity-50 cursor-not-allowed">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
