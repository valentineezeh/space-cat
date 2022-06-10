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
 Mutation: {
  //  not you don't need the parent for root mutations
   incrementTrackViews: async (_, { id }, { dataSources }) => {
     try {
       console.log('===> i got here ')
      const track = await dataSources.TrackAPI.incrementTrackViews(id);

      return {
        code: 200,
        success: true,
        message: `Successfully incremented number of views for track ${id}`,
        track
      }
     } catch(err) {
       return {
        code: err.extensions.response.status,
        success: false,
        message: err.extensions.response.body,
        track: null
       }
     }
   }
 },
//  main type variables for Track
 Track: {
  //  fetch author using the author api using the author ID
   author: ({ authorId }, _, { dataSources }) => {
    return dataSources.TrackAPI.getAuthor(authorId);
   },
  //  fetch modules using the module api with the module id
   modules: ({ id }, _, { dataSources }) => {
     return dataSources.TrackAPI.getTrackModules(id)
   },
   durationInSeconds: ({ length }) => length,
 },
 //  main type variables for Module
 Module: {
   durationInSeconds: ({ length }) => length,
 }
}

module.exports = resolvers;