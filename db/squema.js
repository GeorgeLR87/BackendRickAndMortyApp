const { gql } = require('apollo-server');
//Schema
const typeDefs = gql`

    type Query {
        #Characters
        characters(limite:Int, offset: Int): [Character]
        character(id: ID!) : Character
        totalCharacters : String

        #Episodes
        episodes(limite:Int, offset: Int): [Episode]
        episode(id: ID!) : Episode
        totalEpisodes : String

        #Locations
        locations(limite:Int, offset: Int): [Location]
        location(id: ID!) : Location
        totalLocations: String
    }

    type Character {
        id: ID
        name: String
        status: String
        species: String
        type: String
        gender: String
        origin: Location
        location: Location
        episode: [Episode]
        image: String
        created: String
    } 
    type Episode {
        id: ID
        name: String
        air_date: String
        episode: String
        characters: [Character]
        created: String
    } 

    type Location {
        id: ID
        name: String
        type: String
        dimension: String
        residents: [Character]
        created: String
    } 

    type AllCharacters {
        info: Info
        results: [Character]
    }

    type Info {
        count: Int
        pages: Int
        next: Int
        prev: Int
    }


`;

module.exports = typeDefs