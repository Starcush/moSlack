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

  type Query {
    user(tokenId: String!): User
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
