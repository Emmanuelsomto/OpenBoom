import { X } from "lucide-react";

interface DropModalProps {
  drop: any | null;
  onClose: () => void;
}

export const DropModal: React.FC<DropModalProps> = ({ drop, onClose }) => {
  if (!drop) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-sm w-full text-white relative shadow-xl">
        <div className="relative mb-4">
          <img
            src={drop.artist.avatarUrl}
            alt={drop.artist.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />

          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1.5 rounded-full text-zinc-400 bg-zinc-800 hover:text-white cursor-pointer font-semibold border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-colors ease-in"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <h2 className="font-poppins text-base md:text-lg font-bold mb-1">
          {drop.artist.name}
        </h2>
        <p className="font-lato font-medium text-xs md:text-sm text-zinc-400 mb-1.5">
          {drop.title}
        </p>
        <p className="font-lato font-normal text-xs md:text-sm mb-4 text-emerald-400">
          {drop.artist.location} • {drop.duration}
        </p>

        <p className="font-sans font-normal text-xs md:text-sm leading-relaxed text-zinc-300 mb-4">
          {drop.artist.bio}
        </p>

        {drop.description && (
          <p className="text-xs md:text-sm font-lato font-normal text-zinc-500 mb-6">
            "{drop.description}"
          </p>
        )}

        <a
          href={drop.artist.socials?.bandcamp || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-2.5 bg-emerald-500 text-zinc-950 font-semibold text-center rounded-lg hover:bg-emerald-400 transition-colors cursor-pointer"
        >
          Support Artist
        </a>
      </div>
    </div>
  );
};
