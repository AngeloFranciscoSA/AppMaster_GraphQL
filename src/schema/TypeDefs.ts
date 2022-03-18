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

    input createSuperHero{
        name: String!
        slug: String
        powerstats: createPowerstats
        appearance: createAppearance
        biography: createBiography
        work: createWork
        connections: createConnections
        images: createImages
    }

    input createPowerstats{
        intelligence: Int
        strength: Int
        speed: Int
        durability: Int
        power: Int
        combat: Int
    }

    input createAppearance{
        gender: String
        race: String
        height: [String]
        weight: [String]
        eyeColor: String
        hairColor: String
    }

    input createBiography{
        fullname: String
        alterEgos: String
        aliases: [String]
        placeOfBirth: String
        firstAppearance: String
        publisher: String
        alignment: String
    }

    input createWork{
        occupation: String
        base: String
    }

    input createConnections{
        groupAffiliation: String
        relatives: String
    }

    input createImages{
        xs: String
        sm: String
        md: String
        lg: String
    }

    type Query {
        listHeroes(limit: Int, order: String): [SuperHero]
        searchHeroes(query: String, filter: String): [SuperHero]
    }

    type Mutation{
        createHero(data: createSuperHero): SuperHero
    }

`
export default typeDefs