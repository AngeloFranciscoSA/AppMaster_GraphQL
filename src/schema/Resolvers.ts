import SuperHero from "../SuperHeros";

const SuperHeroClass = new SuperHero()

const resolvers: Object = {
    Query: {
        getAllSuperHeros: (root: any, args: any) => {
            return SuperHeroClass.getSuperHeros();
        },

        searchSuperHeros: async (root: any, args: any) => {
            const _return = await SuperHeroClass.searchSuperHeros(args.query, args.filter)
            return _return
        }
    }
}

export default resolvers;
