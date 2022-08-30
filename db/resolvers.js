const { count } = require('../models/Character');
const Character = require('../models/Character');
const Episode = require('../models/Episode');
const Location = require('../models/Location');

//Resolvers
const resolvers = {
    Query: {
        
        characters: async(root, {limite, offset}) => {
            return Character.find({}).limit(limite).skip(offset)
        },
        character: async(_, {id}) => {
            const oneCharacter = await Character.findById(id)
            return oneCharacter
        },
        totalCharacters: (root) => {
            return new Promise((resolve, object)=> {
                Character.countDocuments({}, (error, count) => {
                    if(error) console.log(error);
                    else resolve(count)
                })
            })
        },

        episodes: async(root, {limite, offset}) => {
            return await Episode.find({}).limit(limite).skip(offset)
        },
        episode: async(_, {id}) => {
            const oneEpisode = await Episode.findById(id)

            return oneEpisode
        },
        totalEpisodes: (root) => {
            return new Promise((resolve, object)=> {
                Episode.countDocuments({}, (error, count) => {
                    if(error) console.log(error);
                    else resolve(count)
                })
            })
        },

        locations:async(root, {limite, offset}) => {
            return await Location.find({}).limit(limite).skip(offset)
        },
        location: async(_, {id}) => {
            const oneLocation = await Location.findById(id)

            return oneLocation
        },
        totalLocations: (root) => {
            return new Promise((resolve, object)=> {
                Location.countDocuments({}, (error, count) => {
                    if(error) console.log(error);
                    else resolve(count)
                })
            })
        },
    },
    Character: {
        origin: async(character, args, contex, info) => {
            return(await character.populate('origin')).origin
        },
        location: async(character, args, contex, info) => {
            return(await character.populate('location')).location
        },
        episode: async(character, args, contex, info) => {
            return(await character.populate('episode')).episode
        },
    },
    Episode: {
        characters: async(episode, args, contex, info) => {
            return(await episode.populate('characters')).characters
        }
    },
    Location: {
        residents: async(location, args, contex, info) => {
            return(await location.populate('residents')).residents
        }
    }
}

module.exports = resolvers;
