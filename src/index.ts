import { ApolloServer } from "apollo-server";
require("dotenv").config();


import typeDefs  from "./schema/TypeDefs";
import resolvers from "./schema/Resolvers";

async function main(typeDefs: any, resolvers: any) {
    const server = new ApolloServer({ 
            typeDefs,
            resolvers,
        });
    await server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
        console.log(`
          🚀  Server is ready at ${url}
          📭  Query at 
        `);
      });
}


main(typeDefs, resolvers);