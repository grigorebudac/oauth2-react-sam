import React from "react";
import ReactDOM from "react-dom";
import { Auth } from "@aws-amplify/auth";

import { amplifyConfig } from "config/amplify.config";
import App from "./App";

Auth.configure(amplifyConfig.Auth);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
