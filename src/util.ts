const appearanceFilter = ["gender", "race", "height", "eyeColor", "hairColor"]

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
    }
  } 

    if(filters[filter] !== undefined){
        return filters[filter]()
    }

    return null
}

export default search;
