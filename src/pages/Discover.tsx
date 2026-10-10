import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

interface Campaign {
  id: number;
  artistName: string;
  projectTitle: string;
  genre: string;
  coverImageUrl: string;
  currentAmount: number;
  fundingGoal: number;
}

const allCampaigns: Campaign[] = [
  {
    id: 0,
    artistName: "Maya Vance",
    projectTitle: "Echoes (Debut EP)",
    genre: "Acoustic",
    coverImageUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    currentAmount: 600,
    fundingGoal: 1000,
  },
  {
    id: 1,
    artistName: "Neon Horizon",
    projectTitle: "Retrowave Single Vol. 1",
    genre: "Synthwave",
    coverImageUrl:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    currentAmount: 420,
    fundingGoal: 1500,
  },
  {
    id: 2,
    artistName: "The Velvet Room",
    projectTitle: "Vinyl Pressing Session",
    genre: "Indie Rock",
    coverImageUrl:
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
    currentAmount: 1200,
    fundingGoal: 1500,
  },
  {
    id: 3,
    artistName: "Kaelen Voss",
    projectTitle: "Midnight Frequencies",
    genre: "Electronic",
    coverImageUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    currentAmount: 850,
    fundingGoal: 2000,
  },
  {
    id: 4,
    artistName: "Aura Collective",
    projectTitle: "Lo-Fi Sessions Live",
    genre: "Hip-Hop",
    coverImageUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    currentAmount: 310,
    fundingGoal: 800,
  },
];

const genres = [
  "All",
  "Acoustic",
  "Synthwave",
  "Indie Rock",
  "Electronic",
  "Hip-Hop",
];

function DiscoverCard({ item }: { item: Campaign }) {
  const [raised, setRaised] = useState(item.currentAmount);
  const percentage = Math.min(
    Math.round((raised / item.fundingGoal) * 100),
    100,
  );

  const handleSupport = (amount: number) => {
    setRaised((prev) => Math.min(prev + amount, item.fundingGoal));
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-4 transition-all hover:border-slate-700">
      <div>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-800">
          <img
            src={item.coverImageUrl}
            alt={item.projectTitle}
            className="h-full w-full object-cover"
          />
          <span className="absolute top-3 left-3 rounded-full bg-slate-950/80 px-2.5 py-1 text-[10px] font-semibold text-slate-300 backdrop-blur-md border border-slate-800">
            {item.genre}
          </span>
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="text-base font-bold text-white truncate">
            {item.projectTitle}
          </h3>
          <p className="text-xs text-slate-400">by {item.artistName}</p>
        </div>
      </div>

      <div>
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

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => handleSupport(10)}
            className="rounded-xl border border-slate-800 bg-slate-800/60 px-3 py-2 text-xs font-semibold text-slate-300 hover:border-indigo-500 hover:text-white transition-all active:scale-95"
          >
            +$10
          </button>

          <button
            type="button"
            onClick={() => handleSupport(25)}
            className="w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition-all cursor-pointer shadow-md shadow-indigo-600/20 active:scale-95"
          >
            Back Project ($25)
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Discover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredCampaigns = allCampaigns.filter((campaign) => {
    const matchesGenre =
      selectedGenre === "All" || campaign.genre === selectedGenre;
    const matchesSearch =
      campaign.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.artistName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesGenre && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-6 text-white mt-28 md:mt-40">
      <section className="flex flex-col gap-2 mb-8">
        <h1 className="text-lg md:text-3xl font-bold font-poppins text-slate-300">
          Discover Campaigns
        </h1>
        <p className="mt-1 font-lato font-medium text-xs md:text-sm tracking-tighter text-slate-400">
          Find and fund upcoming projects from independent creators worldwide.
        </p>
      </section>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search artist or project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2.5 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-slate-500 mr-1 hidden sm:block" />
          {genres.map((genre) => (
            <button
              type="button"
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all duration-200 ease-out ${
                selectedGenre === genre
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {filteredCampaigns.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCampaigns.map((item) => (
            <DiscoverCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
          <p className="text-sm font-medium text-slate-400">
            No campaigns found matching "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
}
