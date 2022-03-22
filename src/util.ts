const appearanceFilter = ["gender", "race", "height", "eyeColor", "hairColor"];
const biographyFilter = [
  "fullName",
  "alterEgos",
  "aliases",
  "placeOfBirth",
  "firstAppearance",
  "publisher",
  "alignment",
];
const workFilter = ["occupation", "base"];
const connectionsFilter = ["groupAffiliation", "relatives"];

function search(data: any[], args: String, filter: any): any {
  const filters: any = {
    name: () => {
      const name = data.filter((hero: any) => {
        return hero.name.toLowerCase().includes(args.toLowerCase());
      });
      return name;
    },

    appearance: () => {
      let appearance: Object = {};

      appearanceFilter.forEach((filter: any) => {
        const result = data.filter((hero: any) => {

          return hero.appearance[filter] || ""
            .toLowerCase()
            .includes(args.toLowerCase());
        });

        appearance = { ...appearance, ...result };
      });
      return Object.values(appearance);
    },

    biography: () => {
      let biography: Object = {};

      biographyFilter.forEach((filter: any) => {

        const result = data.filter((hero: any) => {

          return hero.biography[filter] || ""
            .toLowerCase()
            .includes(args.toLowerCase());
        });

        biography = { ...biography, ...result };
      });
      return Object.values(biography);
    },

    work: () => {
      let work: Object = {};
      workFilter.forEach((filter: any) => {
        const result = data.filter((hero: any) => {
          return hero.work[filter].toLowerCase().includes(args.toLowerCase());
        });
        work = { ...work, ...result };
      });
      return Object.values(work);
    },

    connections: () => {
      let connections: Object = {};
      connectionsFilter.forEach((filter: any) => {
        const result = data.filter((hero: any) => {
          hero.connections[filter].toLowerCase().includes(args.toLowerCase());
        });
        connections = { ...connections, ...result };
      });
      return Object.values(connections);
    },
  };

  if (filters[filter] !== undefined) {
    return filters[filter]();
  }

  return null;
}

function orderFilter(x: any, y: any, order: any): any {
  const filters: any = {
    appearance: appearanceFilter,
    biography: biographyFilter,
    work: workFilter,
    connections: connectionsFilter,
  };

  for (let filter in filters) {
    if (filters[filter].includes(order)) {
      if (x.work[order] > y.work[order]) {
        return 1;
      }
      if (x.work[order] < y.work[order]) {
        return -1;
      }
      return 0;
    }
  }
}

export { search, orderFilter };
