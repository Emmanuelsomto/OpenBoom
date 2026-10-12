export interface spotLightsTrack {
  slug: string;
  title: string;
  artist: string;
  genre: string;
  audioUrl: string;
  description: string;
}

export const spotLights: spotLightsTrack[] = [
  {
    slug: "atlas-pulse",
    title: "Atlas Pulse",
    artist: "Atlas",
    genre: "Electronic",
    audioUrl: "/audio/atlasaudio-electronic.mp3",
    description:
      "Driving synths and rhythmic electronic textures designed for high-energy playback.",
  },

  {
    slug: "amen-phonk",
    title: "Amen",
    artist: "KAIZEN",
    genre: "Phonk",
    audioUrl: "/audio/ccp-hater-amen-phonk-soundtrack.mp3",
    description:
      "Dark phonk rhythms layered with heavy distorted bass and aggressive percussions.",
  },

  {
    slug: "night-drive",
    title: "Night Drive",
    artist: "KAIZEN",
    genre: "Phonk",
    audioUrl: "/audio/ccp-hater-night-drive-phonk-soundtrack.mp3",
    description:
      "Subtle atmospheric melodies colliding with hard-hitting cowbell arrangements.",
  },

  {
    slug: "sport-phonk",
    title: "Velocity",
    artist: "Lumen",
    genre: "Phonk",
    audioUrl: "/audio/echoes_of_lumen-sport-phonk.mp3",
    description:
      "High-bpm drift phonk engineered with raw energetic bass sweeps.",
  },

  {
    slug: "cyberpunk-city",
    title: "Neon Overdrive",
    artist: "Ikoliks",
    genre: "Cyberpunk",
    audioUrl: "/audio/ikoliks_aj-cyberpunk-cyberpunk-music.mp3",
    description:
      "Gritty dark-synth soundscapes depicting futuristic neon alleyways.",
  },

  {
    slug: "overdrive",
    title: "Sub-Zero",
    artist: "Leberch",
    genre: "Cyberpunk",
    audioUrl: "/audio/leberch-cyberpunk.mp3",
    description:
      "Fast-paced industrial cybernetic rhythms with sharp bass pulses.",
  },

  {
    slug: "neon-horizon",
    title: "Neo Horizon",
    artist: "Monda",
    genre: "Cyberpunk",
    audioUrl: "/audio/mondamusic-cyberpunk.mp3",
    description:
      "Atmospheric cyberpunk composition with spacey lead synthesizers.",
  },

  {
    slug: "phonk-underground",
    title: "Underground",
    artist: "Monda",
    genre: "Phonk",
    audioUrl: "/audio/mondamusic-phonk-music.mp3",
    description:
      "Sub-heavy phonk groove anchored by tight drum patterns and vocal chops.",
  },

  {
    slug: "energetic-surge",
    title: "Hyperdrive",
    artist: "Sonican",
    genre: "Electronic",
    audioUrl: "/audio/sonican-energetic-electronic-music.mp3",
    description:
      "Uplifting high-contrast electronic track with crisp percussions.",
  },

  {
    slug: "late-night-lofi",
    title: "Quiet Hours",
    artist: "Velatio",
    genre: "Lo-fi",
    audioUrl: "/audio/velariomusic-lo-fi.mp3",
    description:
      "Relaxed vinyl grooves and warm ambient chords for focus and late-night listening",
  },
];
