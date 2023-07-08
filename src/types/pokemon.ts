export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  image: string;
  stats: {
    name: string;
    value: number;
  }[];
}

export interface PokemonDTO {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  sprites: Sprites;
  stats: Stat[];
}

type PokemonType = {
  type: {
    name: string;
  };
};

type Sprites = {
  front_default: string;
};

type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};
