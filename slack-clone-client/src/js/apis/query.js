import { gql } from '@apollo/client';

// query
export const QUERY_CHANNEL = gql`
  query channelList {
    channelList {
      id
      name
    }
  }
`;

export const QUERY_CHAT = gql`
  query channelContents($channelId: Int!) {
    channelContents(channelId: $channelId) {
      id
      user_id
      channel_id
      time
      content
      name
      profileImg
    }
  }
`;

export const QUERY_USER = gql`
    query user($tokenId: String!){
      user(tokenId: $tokenId) {
        id
        name
        email
        profileImg
      }
    }
  `;

// mutation
export const MUTATION_CHANNEL_ADD = gql`
  mutation addChannel($name: String!){
    addChannel(name: $name) {
      name
    }
  }
`;

export const MUTATION_CONTENTS_ADD = gql`
mutation postContent($userID: Int!, $channelID: Int!, $content: String!) {
  postContent(userID: $userID, channelID: $channelID , content: $content) {
    id
    user_id
    channel_id
    time
    content
  }
}
`;

// subsription
export const SUBSCRIPTION_CHAT = gql`
  subscription chat($channelId: Int!){
    chat(channelId: $channelId) {
      id
      user_id
      channel_id
      time
      content
      name
      profileImg
    }
  }
`;

export const SUBSCRIPTION_CHANNEL = gql`
  subscription channelSubscription {
    channelSubscription {
      id
      name
    }
  }
`;
