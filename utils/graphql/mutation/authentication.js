import gql from 'graphql-tag';

const JOBS_QUERY = gql`
  mutation authenticateUserWithPassword($user: Object!) {
    authenticateUserOutput (user: $user) {
      token,
      item { id }
    }
  }
`;

export default JOBS_QUERY;