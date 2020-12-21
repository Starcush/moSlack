const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const dotenv = require('dotenv');

dotenv.config();

const schema = buildSchema(`
  type User {
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
    channel_id: Int
    time: String
    content: String
  }

  type Query {
    user(tokenId: String!): User
    channelList: [Channel!]!
    channelContents(channelId: Int!): [Contents]
  }

  type Mutation {
    addChannel(name: String!): [Channel!]!
  }
`);

const { root } = require('./resolvers');

const app = express();
const port = 4000;

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
