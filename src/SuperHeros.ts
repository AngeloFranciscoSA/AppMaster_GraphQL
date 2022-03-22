import axios from "axios";
import { search } from "./util";

class SuperHero {
  _superHeroData: any[] = [];
  baseURL: string;

  constructor() {
    this.baseURL =
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/";
  }

  async createSuperHeroObject() {
    if (Object.keys(this._superHeroData).length > 0) {
      return this._superHeroData;
    }

    await axios
      .get(this.baseURL + "all.json")
      .then((response) => {
        this._superHeroData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return this._superHeroData;
  }

  async getSuperHeros() {
    return await this.createSuperHeroObject();
  }

  async searchSuperHeros(query: String, filter: String) {
    const heroData = this.createSuperHeroObject();
    const awaitData = await heroData;

    const allFilters = [
      "name",
      "appearance",
      "biography",
      "work",
      "connections",
    ];

    if (filter !== undefined) {
      return search(awaitData, query, filter);
    } else {
      let _return = {};

      for (let i = 0; i < allFilters.length; i++) {
        const _search: Object = search(awaitData, query, allFilters[i]);
        if (_search !== null) {
          if (Object.keys(_search).length !== 0) {
            _return = _search;
          }
        }
      }
      return _return;
    }
  }

  async insertSuperHero(args: any) {
    const heroData = this.createSuperHeroObject();
    const awaitData = await heroData;

    const lastElementArray = awaitData.pop();
    const lastElement = lastElementArray.id + 1;
    
    const powerstats: any = args.data.powerstats === undefined ? {} : args.data.powerstats[0];
    const appearance: any = args.data.appearance === undefined ? {} : args.data.appearance[0]
    const biography: any = args.data.biography === undefined ? {} : args.data.biography[0]
    const work: any = args.data.work === undefined ? {} : args.data.work[0]
    const connections: any = args.data.connections === undefined ? {} : args.data.connections[0]
    const images: any = args.data.images === undefined ? {} : args.data.images[0]

    const _args = {
      id: lastElement,
      name: args.data.name,
      slug:
        args.data.slug === null
          ? `${lastElement}-${args.data.name}`
          : args.data.slug,
      powerstats: {
        intelligence: powerstats.intelligence,
        strength: powerstats.strength,
        speed: powerstats.speed,
        durability: powerstats.durability,
        power: powerstats.power,
        combat: powerstats.combat,
      },
      appearance: {
        gender: appearance.gender,
        race: appearance.race,
        height: appearance.height,
        weight: appearance.weight,
        eyeColor: appearance.eyeColor,
        hairColor: appearance.hairColor,
      },
      biography: {
        fullname: biography.fullname,
        alterEgos: biography.alterEgos,
        aliases: biography.aliases,
        placeOfBirth: biography.placeOfBirth,
        firstAppearance: biography.firstAppearance,
        publisher: biography.publisher,
        alignment: biography.alignment,
      },
      work: {
        occupation: work.occupation,
        base: work.base,
      },
      connections: {
        groupAffiliation: connections.groupAffiliation,
        relatives: connections.relatives,
      },
      images: {
        xs: images.xs,
        sm: images.sm,
        md: images.md,
        lg: images.lg,
      },
    };

    this._superHeroData.push(_args);
    return this._superHeroData;
  }
}

export default SuperHero;
