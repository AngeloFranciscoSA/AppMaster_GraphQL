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

    const _args = {
      id: lastElement,
      name: args.data.name,
      slug:
        args.data.slug === null
          ? `${lastElement}-${args.data.name}`
          : args.data.slug,
      powerstats: {
        intelligence: args.data.powerstats.intelligence,
        strength: args.data.powerstats.strength,
        speed: args.data.powerstats.speed,
        durability: args.data.powerstats.durability,
        power: args.data.powerstats.power,
        combat: args.data.powerstats.combat,
      },
      appearance: {
        gender: args.data.appearance.gender,
        race: args.data.appearance.race,
        height: args.data.appearance.height,
        weight: args.data.appearance.weight,
        eyeColor: args.data.appearance.eyeColor,
        hairColor: args.data.appearance.hairColor,
      },
      biography: {
        fullname: args.data.biography.fullname,
        alterEgos: args.data.biography.alterEgos,
        aliases: args.data.biography.aliases,
        placeOfBirth: args.data.biography.placeOfBirth,
        firstAppearance: args.data.biography.firstAppearance,
        publisher: args.data.biography.publisher,
        alignment: args.data.biography.alignment,
      },
      work: {
        occupation: args.data.work.occupation,
        base: args.data.work.base,
      },
      connections: {
        groupAffiliation: args.data.connections.groupAffiliation,
        relatives: args.data.connections.relatives,
      },
      images: {
        xs: args.data.images.xs,
        sm: args.data.images.sm,
        md: args.data.images.md,
        lg: args.data.images.lg,
      },
    };

    awaitData.push(_args);
    return awaitData;
  }
}

export default SuperHero;
