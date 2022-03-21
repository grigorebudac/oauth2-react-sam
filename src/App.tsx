import React, { useEffect } from "react";
import { Auth, CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

const App = () => {
  useEffect(() => {
    getCurrentUser();
  }, []);

  async function getCurrentUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log({ user });
  }

  function handleSignIn(provider: CognitoHostedUIIdentityProvider) {
    Auth.federatedSignIn({ provider });
  }

  return (
    <div>
      <button
        onClick={() => handleSignIn(CognitoHostedUIIdentityProvider.Facebook)}
      >
        Facebook
      </button>

      <button
        onClick={() => handleSignIn(CognitoHostedUIIdentityProvider.Google)}
      >
        Google
      </button>

      <button
        onClick={() => handleSignIn(CognitoHostedUIIdentityProvider.Apple)}
      >
        Apple
      </button>

      <button
        onClick={() =>
          handleSignIn("Microsoft" as CognitoHostedUIIdentityProvider)
        }
      >
        Microsoft
      </button>
    </div>
  );
};

export default App;
