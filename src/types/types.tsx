export type Film = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  id: number;
};

export type CharacterType = {
  name:string;
  height:number;
  mass:number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: number[];
  vehicles: number[];
  starships: number[];
  created: string;
  edited: string;
  wiki: string;
  image: string;
  species:string;
  born?: string;
  bornLocation?: string;
  died?: string;
  diedLocation?: string;
  id: string;
}