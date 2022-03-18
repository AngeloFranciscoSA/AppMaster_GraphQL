const appearanceFilter = ["gender", "race", "height", "eyeColor", "hairColor"]
const biographyFilter = ["fullName", "alterEgos", "aliases", "placeOfBirth", "firstAppearance", "publisher", "alignment"]
const workFilter = ["occupation", "base"]
const connectionsFilter = ["groupAffiliation", "relatives"]

function search(data: any[], args: String, filter: any): any {
  const filters: any = {
    name: () => {
      const name = data.filter((hero: any) => hero.name === args);
      return name;
    },

    appearance: () => {
        let appearance: Object = {}
        appearanceFilter.forEach((filter: any) => {
            const result = data.filter((hero: any) => hero.appearance[filter] === args);
            appearance = {...appearance, ...result}
        })
        return Object.values(appearance)
    },

    biography: () => {
      let biography: Object = {}
      biographyFilter.forEach((filter: any) => {
        const result = data.filter( (hero:any ) => hero.biography[filter] === args);
        biography = {...biography, ...result}
      })
      return Object.values(biography)
    },

    work: () => {
      let work: Object = {}
      workFilter.forEach((filter: any) => {
        const result = data.filter( (hero:any ) => hero.work[filter] === args);
        work = {...work, ...result}
      })
      return Object.values(work)
    },

    connections: () => {
      let connections: Object = {}
      connectionsFilter.forEach((filter: any) => {
        const result = data.filter( (hero:any ) => hero.connections[filter] === args);
        connections = {...connections, ...result}
      })
      return Object.values(connections)
    }
  } 

    if(filters[filter] !== undefined){
        return filters[filter]()
    }

    return null
}

export default search;
