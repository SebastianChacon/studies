export enum OwnerId {
  Marvel = "Marvel",
  DC = "DC",
}

export interface Hero {
  name: string;
  owner: OwnerId;
  id: number;
}

const heroes: Hero[] = [
  {
    name: "Iron",
    owner: OwnerId.DC,
    id: 1,
  },
];

export const getHeroByOwner = (owner: OwnerId): Hero[] => {
  let HeoresOwner = heroes.filter((hero) => hero.owner === owner);

  return HeoresOwner;
};
