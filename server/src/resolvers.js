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
  //  fetch author using the author api using the author ID
   author: ({ authorId }, _, { dataSources }) => {
    return dataSources.TrackAPI.getAuthor(authorId);
   },
  //  fetch modules using the module api with the module id
   modules: ({ id }, _, { dataSources }) => {
     return dataSources.TrackAPI.getTrackModules(id)
   }
 }
}

module.exports = resolvers;