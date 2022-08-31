type BasicItem = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

type Image = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

type DayMonthYear = {
  day: number | null;
  month: number | null;
  year: number | null;
}

export type AnimeItem = {
  mal_id: number;
  url: string;
  images: {
    jpg: Image;
    webp: Image;
  };
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: {
      image_url: string | null;
      small_image_url: string | null;
      medium_image_url: string | null;
      large_image_url: string | null;
      maximum_image_url: string | null;
    };
  };
  approved: boolean;
  titles: {
    type: string;
    title: string;
  }[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: DayMonthYear;
      to: DayMonthYear;
    };
    string: string;
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: BasicItem[];
  licensors: BasicItem[];
  studios: BasicItem;
  genres: BasicItem[];
  explicit_genres: BasicItem[];
  themes: BasicItem[];
  demographics: BasicItem[];
};