import SuperHero from "../SuperHeros";

const SuperHeroClass = new SuperHero()
const appearanceFilter = ["gender", "race", "height", "eyeColor", "hairColor"]
const biographyFilter = ["fullName", "alterEgos", "aliases", "placeOfBirth", "firstAppearance", "publisher", "alignment"]
const workFilter = ["occupation", "base"]
const connectionsFilter = ["groupAffiliation", "relatives"]

const resolvers: Object = {
    Query: {
        listHeroes: async (root: any, args: any) => {

            const { limit, order } = args
            let _return =  await SuperHeroClass.getSuperHeros()

            if(limit !== undefined){
                _return = _return.slice(0, limit)
            }

            // if(order !== undefined){

            //     _return = _return.sort( (x: any, y: any) => {
            //         x[order].localeCompare(y[order])
            //         return 1
            //     })
            // }

            return _return;
        },

        searchHeroes: async (root: any, args: any) => {
            const _return = await SuperHeroClass.searchSuperHeros(args.query, args.filter)
            return _return
        }
    },

    Mutation: {
        createHero: async (root: any , args: any) => {
            return SuperHeroClass.insertSuperHero(args)
        }
    }
}

export default resolvers;
