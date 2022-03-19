import SuperHero from "../SuperHeros";
import { orderFilter } from "../util";

const SuperHeroClass = new SuperHero();

const resolvers: Object = {
  Query: {
    listHeroes: async (root: any, args: any) => {
      const { limit, order } = args;
      let _return: any = await SuperHeroClass.getSuperHeros();

      if (limit !== undefined) {
        _return = _return.slice(0, limit);
      }

      if (order !== undefined) {
        _return = _return.sort((x: any, y: any): any => {
          return orderFilter(x, y, order);
        });
      }

      return _return;
    },

    searchHeroes: async (root: any, args: any) => {
      const _return = await SuperHeroClass.searchSuperHeros(
        args.query,
        args.filter
      );
      return _return;
    },
  },

  Mutation: {
    createHero: async (root: any, args: Object) => {
      return SuperHeroClass.insertSuperHero(args);
    },
  },
};

export default resolvers;
