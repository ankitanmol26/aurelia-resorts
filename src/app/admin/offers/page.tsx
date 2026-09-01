import { getOffers } from "@/lib/api";
import Image from "next/image";
import EditOfferModal from "@/components/admin/EditOfferModal";

export default async function AdminOffersPage() {
  const offers = await getOffers();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl text-white mb-2">Special Offers</h1>
          <p className="text-foreground-secondary text-sm">Manage promotional packages and rates.</p>
        </div>
        <button className="btn-primary px-6 py-3 text-sm">
          + Add New Offer
        </button>
      </div>

      <div className="bg-background-secondary border border-white/10 rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="py-4 px-6 text-xs uppercase tracking-widest text-foreground-secondary font-semibold">Offer</th>
              <th className="py-4 px-6 text-xs uppercase tracking-widest text-foreground-secondary font-semibold">Description</th>
              <th className="py-4 px-6 text-xs uppercase tracking-widest text-foreground-secondary font-semibold">Validity</th>
              <th className="py-4 px-6 text-xs uppercase tracking-widest text-foreground-secondary font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {offers.map((offer) => (
              <tr key={offer.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
                      <Image src={offer.image} alt={offer.title} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-serif text-white text-lg">{offer.title}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-foreground-secondary max-w-xs truncate">
                  {offer.description}
                </td>
                <td className="py-4 px-6 text-sm text-foreground">
                  {offer.validity}
                </td>
                <td className="py-4 px-6 text-right">
                  <EditOfferModal offer={offer} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
