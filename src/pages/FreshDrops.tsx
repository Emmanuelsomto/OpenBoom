import { DropModal } from "../components/DropModal";
import { artistData } from "../data/artistData";
import { useState } from "react";

export default function FreshDrops() {
  const [selectedDrop, setSelectedDrop] = useState<any | null>(null);
  return (
    <div className="text-white mx-4 bg-zinc-950 p-6 mt-28 md:mt-40 rounded-lg">
      <h1 className="font-poppins font-bold text-xl md:text-3xl text-slate-300 mb-6">
        Fresh Drops
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {artistData.map((data) => (
          <div
            key={data.id}
            onClick={() => setSelectedDrop(data)}
            className="cursor-pointer bg-zinc-900 border border-zinc-800 rounded-lg p-3 hover:border-emerald-500/50 transition-colors"
          >
            <img
              src={data.artist.avatarUrl}
              alt={data.artist.name}
              className="h-40 w-full object-cover rounded-lg"
            />

            <h3 className="font-poppins font-semibold mt-2 text-sm md:text-base">
              {data.artist.name}
            </h3>
            <p className="text-xs md:text-sm font-normal font-lato mt-2">
              {data.title}
            </p>

            <span className="inline-block mt-2 text-[10px] bg-zinc-800 text-emerald-400 px-2 py-1.5 rounded-md">
              {data.genre}
            </span>
          </div>
        ))}
      </div>

      <DropModal drop={selectedDrop} onClose={() => setSelectedDrop(null)}/>
    </div>
  );
}
