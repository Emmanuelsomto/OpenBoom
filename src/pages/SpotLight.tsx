import { useParams, Link } from "react-router-dom";
import { spotLights } from "../data/spotLightsTrack";
import AudioPlayer from "../components/AudioPlayer";

export default function SpotlightPage() {
  const { slug } = useParams<{ slug?: string }>();

  // CASE 1: No slug provided -> Show the list of all tracks
  if (!slug) {
    return (
      <main className="min-h-screen bg-black text-zinc-100 px-6 md:px-16 lg:px-24 mt-28 md:mt-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl md:text-3xl font-bold tracking-tight text-slate-300 mb-2">
            Spotlight Releases
          </h1>
          <p className="text-zinc-400 mb-8 font-lato font-normal text-sm md:text-base">
            Explore curated indie tracks and high-end audio production.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {spotLights.map((track) => (
              <Link
                key={track.slug}
                to={`/spotlight/${track.slug}`}
                className="group border border-zinc-800 bg-zinc-950 p-6 rounded-xl hover:border-emerald-400/50 transition-all flex items-center justify-between"
              >
                <div className="flex flex-col min-w-0">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono mb-1">
                    {track.genre}
                  </span>
                  <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                    {track.title}
                  </h2>
                  <p className="text-sm text-zinc-400 truncate">
                    {track.artist}
                  </p>
                </div>
                <span className="text-zinc-500 group-hover:text-white transition-colors font-mono text-sm ml-4 shrink-0">
                  Play →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // CASE 2: Slug provided -> Find and show the individual track player
  const track = spotLights.find((t) => t.slug === slug);

  if (!track) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-2">Track Not Found</h1>
        <p className="text-zinc-400 mb-6">
          The audio track you're looking for doesn't exist.
        </p>
        <Link
          to="/spotlight"
          className="px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors"
        >
          Back to Spotlight Catalog
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto mb-8">
        <Link
          to="/spotlight"
          className="text-sm font-mono text-zinc-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
        >
          ← Back to Spotlight Catalog
        </Link>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="border border-zinc-800 bg-zinc-950 p-8 rounded-xl shadow-2xl flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">
            Spotlight Release • {track.genre}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            {track.title}
          </h1>
          <p className="text-lg text-zinc-400 font-medium">
            Artist: <span className="text-zinc-200">{track.artist}</span>
          </p>
          <hr className="border-zinc-800 my-2" />
          <p className="text-zinc-300 leading-relaxed max-w-2xl text-sm md:text-base">
            {track.description}
          </p>
        </div>

        <AudioPlayer
          title={track.title}
          artist={track.artist}
          genre={track.genre}
          audioUrl={track.audioUrl}
        />
      </div>
    </main>
  );
}
