export interface ArtistSocials {
  bandcamp: string;
}

export interface Artist {
  id: string;
  name: string;
  avatarUrl: string;
  location: string;
  bio: string;
  socials: ArtistSocials;
}

export interface DropTrack {
  id: string;
  title: string;
  artist: Artist;
  genre: string;
  releaseDate: string;
  duration: string;
  description: string;
}

export const freshDrops: DropTrack[] = [
  {
    id: "drop-astropilot-solarwalk5",
    title: "Solar Walk V: A Different Scale of Time",
    artist: {
      id: "astro-sphere",
      name: "Astro Sphere",
      avatarUrl: "https://f4.bcbits.com/img/0031536378_21.jpg",
      location: "Ukraine / Ambient Producer",
      bio: "Electronic ambient composer crafting deep space textures, chillout rhythms, and immersive soundscapes.",
      socials: {
        bandcamp: "https://astro-sphere.bandcamp.com",
      },
    },
    genre: "Space Ambient / Continuous Longform",
    releaseDate: "Fresh Drop",
    duration: "1:03:36",
    description:
      "Continuous longform space ambient soundscape engineered for deep focus and meditation.",
  },

  {
    id: "drop-lofi-resistance-chalklines",
    title: "Chalk Lines",
    artist: {
      id: "Lo-Fi-resistance",
      name: "Lo-Fi Resistance",
      avatarUrl: "https://f4.bcbits.com/img/0014919296_21.jpg",
      location: "Alt-Rock / Art Rock",
      bio: "Progressive and alt-rock project led by McStine Featuring collaborators from King Crimson, Porcupine Tree, and King's X.",
      socials: {
        bandcamp: "https://lofiresistance.bandcamp.com",
      },
    },
    genre: "Alt-Rock / Progressive",
    releaseDate: "Fresh Drop",
    duration: "06:49",
    description:
      "Powerful fusion of Alt-Rock, Singer-Songwriter, and Progressive-influenced Art Rock.",
  },

  {
    id: "drop-modular-triangulo",
    title: "El Triangulo de las Bermudas",
    artist: {
      id: "modular",
      name: "Modular",
      avatarUrl: "https://f4.bcbits.com/img/0000732194_21.jpg",
      location: "Argentina",
      bio: "Argentine duo blending nostalgic 60s space-pop, lounge grooves, and analog synthesizer soundscapes.",
      socials: {
        bandcamp: "https://modular4.bandcamp.com",
      },
    },
    genre: "Space Pop / Retro Synth",
    releaseDate: "Fresh Drop",
    duration: "3:42",
    description:
      "Nostalgic space-age pop featuring vinatge synths and playful lounge melodies.",
  },

  {
    id: "drop-phonk-records-records-techno",
    title: "PHONK! Techno Release",
    artist: {
      id: "phonk-records",
      name: "PHONK! Records",
      avatarUrl: "https://f4.bcbits.com/img/0019025677_21.jpg",
      location: "Berlin, Germany",
      bio: "Berlin-based electronic record label founded by Brazilian artists Anne Gelfei and David Merlino",
      socials: {
        bandcamp: "https://phonkrecords.bandcamp.com",
      },
    },
    genre: "Techno / Industrial",
    releaseDate: "Fresh Drop",
    duration: "05:30",
    description:
      "High-energy Berlin techno featuring hard-hitting electronic soundscapes and industrial rhythms.",
  },

  {
    id: "drop-dj-rap-jungle-dnb",
    title: "Spiritual Aura / Propa Bass Drop.",
    artist: {
      id: "dj-rap",
      name: "DJ Rap",
      avatarUrl: "https://f4.bcbits.com/img/0013359651_21.jpg",
      location: "UK",
      bio: "Charissa Saverio (DJ Rap) is a pioneer in drum & bass and jungle music, turnablist, and founder of Propa Talent",
      socials: {
        bandcamp: "https://djrap.bandcamp.com",
      },
    },
    genre: "Drum & Bass / Jungle",
    releaseDate: "Fresh Drop",
    duration: "04:15",
    description:
      "High-energy UK drum & bass and jungle rhythms from an electronic music pioneer.",
  },

  {
    id: "drop-marina-herlop-dja-dja",
    title: "Dja Dja",
    artist: {
      id: "marina-herlop",
      name: "Marina Helop",
      avatarUrl: "https://f4.bcbits.com/img/0045844530_21.jpg",
      location: "Barcelona, Spain",
      bio: "Barcelona-based classically trained pianist and avant-garde composer blending experimental electronics with intricate vocal textures.",
      socials: {
        bandcamp: "https://marinaherlop.bandcamp.com",
      },
    },
    genre: "Experimental / Avante-Garde",
    releaseDate: "Fresh Drop",
    duration: "03:54",
    description:
      "Surreal and ambitions experimental electronic compositions  layered with intricate vocal harmonies.s",
  },
];
