const { gql } = require('apollo-server');

const schema = gql`
  type Query{
    "Query to get tracks array for the homepage"
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }


  "A track is group of modules that teaches about a specific topic"
  type Track{
    id: ID!
    "The track's title"
    title: String!
    "The track main author"
    author: Author!
    "The track main illustration to display"
    thumbnail: String
    "The track's length"
    length: Int
    "The number of tracks"
    modulesCount: Int
    "the track complete description"
    description: String
    "the number of time a track has been viewed"
    numberOfViews: Int
    "track modules and it can not be null"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The module's length in minutes"
    length: Int
  }

  "Author of a complete track"
  type Author{
    id: ID!
    "Author first name and last name"
    name: String!
    "Author photo which can be nullable or empty"
    photo: String
  }
`

module.exports = schema