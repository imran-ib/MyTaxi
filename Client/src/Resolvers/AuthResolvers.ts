import gql from "graphql-tag";
export const Me = gql`
  query Me {
    me {
      id
      firstName
      lastName
      fullName
      email
      age
      phone
      avatar
      lastLat
      lastLng
      lastOrientation
      isDriving
      isRiding
      isTaken
      isVerified
    }
  }
`;

export const loginUserMutation = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      ok
      token
    }
  }
`;
export const ChatSubscription = gql`
  subscription {
    ChatMessageSubscription {
      mutation
      node {
        text
      }
    }
  }
`;
