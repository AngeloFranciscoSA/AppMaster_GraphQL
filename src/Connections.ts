import Resolvers from "./schema/Resolvers";
import SuperHero from "./SuperHeros"
;
const https = require("https");

function getSuperHeros() {
  let listHeros: any = [];

  https.get(
    "",
    function (res: any) {
      res.on("data", (d: any) => {
        listHeros.push(d);
      });

      res.on("end", () => {
        const superHerosJSON: any = JSON.parse(
          Buffer.concat(listHeros).toString()
        );

        const hero = new SuperHero(
          superHerosJSON[0].id,
          superHerosJSON[0].name,
          superHerosJSON[0].slug
        );

        Resolvers(hero.getter());
      });
    }
  );
}

export default getSuperHeros;
