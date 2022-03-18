import { gql } from 'apollo-server';

const typeDefs = gql`

    type SuperHero{
        id: Int
        name: String
        slug: String
        powerstats: Powerstats
        appearance: Appearance
        biography: Biography
        work: Work
        connections: Connections
        images: Images
    }

    type Powerstats{
        intelligence: Int
        strength: Int
        speed: Int
        durability: Int
        power: Int
        combat: Int
    }

    type Appearance{
        gender: String
        race: String
        height: [String]
        weight: [String]
        eyeColor: String
        hairColor: String
    }

    type Biography{
        fullname: String
        alterEgos: String
        aliases: [String]
        placeOfBirth: String
        firstAppearance: String
        publisher: String
        alignment: String
    }

    type Work{
        occupation: String
        base: String
    }

    type Connections{
        groupAffiliation: String
        relatives: String
    }

    type Images{
        xs: String
        sm: String
        md: String
        lg: String
    }

    type Query {
        getAllSuperHeros(limit: Int, order: String): [SuperHero]
        searchSuperHeros(query: String, filter: String): [SuperHero]
    }

    type Mutation{
        createSuperHero(name: String!): SuperHero
    }

`
export default typeDefs