const resolvers = {
 Query: {
  //  returns an array of tracks that will be used to populate
  // the homepage grid of our web client
  // you can use _ to omit an argument
  tracksForHome: (_, __, { dataSources }) => {
    return dataSources.TrackAPI.getTracksForHome();
  },
  // return a single track by id, for the track page
  track: (_, { id }, { dataSources }) => {
    return dataSources.TrackAPI.getTrack(id)
  }
 },
 Track: {
   author: ({ authorId }, _, { dataSources }) => {
    return dataSources.TrackAPI.getAuthor(authorId);
   },
   modules: ({ id }, _, { dataSources }) => {
     return dataSources.TrackAPI.getTrackModules(id)
   }
 }
}

module.exports = resolvers;