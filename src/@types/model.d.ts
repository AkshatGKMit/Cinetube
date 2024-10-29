interface User {
  id: number;
  name: string;
  username: string;
  image: {
    hash: string;
    profile: string | null;
  };
}

interface Image {
  height: number;
  width: number;
  path: string;
  aspectRatio: number;
}

type Images = Image[];

interface Video {
  id: string;
  name: string;
  watchId: string;
  type: 'Teaser' | 'Trailer' | 'Featurette';
  site: 'YouTube' | 'Vimeo' | string;
  size: number;
  official: boolean;
}

type Videos = Video[];

interface MovieImages {
  id: number;
  backdrops: Images;
  logos: Images;
  posters: Images;
}

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  originalTitle: string;
  overview: string;
  adult: boolean;
  popularity: number;
  backdropPath: string | null;
  posterPath: string | null;
  budget?: number;
  genres?: StringList;
  homepage?: string;
  imdbId?: string;
  revenue?: number;
  runtime?: number;
  tagline?: string;
}

type Movies = Movie[];

interface MovieList {
  page: number;
  results: Movies;
  totalPages?: number;
  totalResults?: number;
}
