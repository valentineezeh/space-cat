const { ApolloServer } = require('apollo-server');
const schema = require('./schema');
const resolvers = require('./resolvers')
const TrackAPI = require('./datasources/track-api')

// const mocks = {
//   Query: () => ({
//     tracksForHome: () => [...new Array(6)]
//   }),
//   Track: () => ({
//     id: () => 'track_01',
//     title: () => 'Astro Kitty, Space Explorer',
//     author: () => {
//       return {
//         name: 'Grumpy Cat',
//         photo:
//           'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
//       };
//     },
//     thumbnail: () =>
//       'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
//     length: () => 1210,
//     modulesCount: () => 6
//   })
// };

// Create an instance that connect to an apollo-server passing the schema into the function as an object
const server = new ApolloServer({
  typeDefs: schema,
  // mocks,
  resolvers,
  dataSources: () => {
    return {
      TrackAPI: new TrackAPI()
    }
  }
});

server.listen().then(() => {
  console.log(`
    Server is running
    Listening to port 4000
    Query at http://studio.apollographql.com/dev
  `)
})
