import { useState, useEffect, useRef } from "react";

interface AudioPlayerProps {
  title: string;
  artist: string;
  genre: string;
  audioUrl: string;
}

export default function AudioPlayer({
  title,
  artist,
  genre,
  audioUrl,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (timeInSeconds: number): string => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return "0.00";

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="mt-8 w-full bg-zinc-950 border border-zinc-800 p-6 rounded-lg shadow-2xl text-zinc-100">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            {genre}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white font-poppins">{title}</h3>
          <p className="text-sm text-zinc-400 font-lato">{artist}</p>
        </div>

        <button
          type="button"
          onClick={togglePlay}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-zinc-950 transition hover:bg-emerald-400"
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>

      <div className="mt-6">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={handleSeek}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-zinc-800 accent-emerald-500"
          aria-label="Audio progress"
        />

        <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-linear-to-r from-emerald-400 to-lime-300 transition-all duration-200"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
