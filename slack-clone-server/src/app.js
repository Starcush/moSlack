const { GraphQLServer, PubSub } = require('graphql-yoga');

const dotenv = require('dotenv');

dotenv.config();

const typeDefs = `
  scalar Date

  type User {
    id: Int
    name: String
    email: String
    profileImg: String
  }

  type Channel {
    id: Int
    name: String!
  }

  type Contents {
    id: Int
    user_id: Int
    name: String
    profileImg: String
    channel_id: Int
    time: Date
    content: String
  }

  type Query {
    user(tokenId: String!): User
    channelList: [Channel!]!
    channelContents(channelId: Int!): [Contents]
    content(insertId: Int!): Contents
  }

  type Mutation {
    addChannel(name: String!): [Channel!]!
    postContent(userID: Int!, channelID: Int!, content: String!): [Contents]
  }

  type Subscription {
    chat(channelId: Int!): [Contents]
    channelSubscription: [Channel]
  }
`;

const { resolvers } = require('./resolvers');

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });
// eslint-disable-next-line no-underscore-dangle
Object.assign(server.executableSchema._typeMap.Date, {
  name: 'Date',
  description: 'Date Type',
  serialize: (value) => {
    const date = new Date(value);
    return date;
  },
});

server.start(({ port }) => {
  console.log(`listening at http://localhost:${port}`);
});
