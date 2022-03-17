import { ApolloServer } from "apollo-server";


import typeDefs  from "./schema/TypeDefs";
import resolvers from "./schema/Resolvers";

async function main(typeDefs: any, resolvers: any) {
    const server = new ApolloServer({ 
            typeDefs,
            resolvers,
        });
    const { url } = await server.listen({ port: 3000 });
    console.log(`Server ready at ${url}`);
}


main(typeDefs, resolvers);