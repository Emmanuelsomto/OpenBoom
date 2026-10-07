import { useState } from "react";

export interface Campaign {
  id: number;
  artistName: string;
  projectTitle: string;
  coverImageUrl: string;
  currentAmount: number;
  fundingGoal: number;
}

const campaignData: Campaign[] = [
  {
    id: 0,
    artistName: "Maya Vance",
    projectTitle: "Echoes (Debut EP)",
    coverImageUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    currentAmount: 600,
    fundingGoal: 1000,
  },
  {
    id: 1,
    artistName: "Neon Horizon",
    projectTitle: "Retrowave Single Vol. 1",
    coverImageUrl:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    currentAmount: 420,
    fundingGoal: 500,
  },
  {
    id: 2,
    artistName: "The Velvet Room",
    projectTitle: "Vinyl Pressing Session",
    coverImageUrl:
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
    currentAmount: 1200,
    fundingGoal: 1500,
  },
];

// Single Interactive Card Component
function CampaignCard({ item }: { item: Campaign }) {
  // Local state so each card tracks its own funded amount
  const [raised, setRaised] = useState(item.currentAmount);

  // Calculate progress percentage dynamically
  const percentage = Math.min(
    Math.round((raised / item.fundingGoal) * 100),
    100,
  );

  // Function that runs when the user clicks a button
  const handleSupport = (amount: number) => {
    setRaised((prev) => Math.min(prev + amount, item.fundingGoal));
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-4 transition-all hover:border-slate-700">
      {/* Cover Image */}
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-800">
        <img
          src={item.coverImageUrl}
          alt={item.projectTitle}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <h3 className="text-base font-bold text-white truncate">
          {item.projectTitle}
        </h3>
        <p className="text-xs text-slate-400">by {item.artistName}</p>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 space-y-2 rounded-xl bg-slate-950/60 p-3 border border-slate-800/80">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-white">
            ${raised}
            <span className="text-slate-400">/ ${item.fundingGoal}</span>
          </span>
          <span className="text-indigo-400 font-bold">{percentage}%</span>
        </div>

        <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Interactive Action Buttons */}
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => handleSupport(10)}
          className="cursor-pointer rounded-xl border border-slate-800 bg-slate-800/60 px-3 py-2 text-xs font-semibold text-slate-300 hover:border-indigo-500 hover:text-white transition-all active:scale-95"
        >
          +$10
        </button>
        <button
          type="button"
          onClick={() => handleSupport(25)}
          className="w-full cursor-pointer rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20 active:scale-95"
        >
          Back Project ($25)
        </button>
      </div>
    </div>
  );
}

// Main Spotlight Container
export default function ArtistSpotlight() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Spotlight Campaigns</h2>
        <p className="text-sm text-slate-400">
          Directly support indie releases
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {campaignData.map((item) => (
          <CampaignCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
