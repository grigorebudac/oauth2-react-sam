const {
  REACT_APP_AWS_REGION,
  REACT_APP_AWS_USER_POOL_ID,
  REACT_APP_AWS_USER_POOL_CLIENT_ID,
  REACT_APP_AWS_IDENTITY_POOL_ID,
  REACT_APP_OAUTH_DOMAIN,
  REACT_APP_OAUTH_REDIRECT,
} = process.env;

const amplifyConfig = {
  Auth: {
    region: REACT_APP_AWS_REGION,
    userPoolId: REACT_APP_AWS_USER_POOL_ID,
    userPoolWebClientId: REACT_APP_AWS_USER_POOL_CLIENT_ID,
    identityPoolId: REACT_APP_AWS_IDENTITY_POOL_ID,
    oauth: {
      domain: REACT_APP_OAUTH_DOMAIN,
      redirectSignIn: REACT_APP_OAUTH_REDIRECT,
      redirectSignOut: REACT_APP_OAUTH_REDIRECT,
      responseType: "token",
    },
  },
};

export { amplifyConfig };
