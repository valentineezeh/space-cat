const { gql } = require('apollo-server');

const schema = gql`
  type Query{
    "Query to get tracks array for the homepage"
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewResponse!
  }

  type IncrementTrackViewResponse {
    "Similar to Http status code, represent the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
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
    "The track's length in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "The track full duration in seconds"
    durationInSeconds: Int
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
    "The track's length in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "The track full duration in seconds"
    durationInSeconds: Int
    "The module text base descriptions"
    content: String
    "The module's video url, for video-based modules"
    videoUrl: String
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