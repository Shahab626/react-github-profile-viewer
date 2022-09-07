import React from "react";
import "./index.css";
import App from "./App";

import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Auth0Provider
    domain="dev-gtc07mtk.us.auth0.com"
    clientId="raGowb4OK304BrODhHMNv2dzuIo64UbG"
    redirectUri={window.location.origin}
    cacheLocation="localstorage">
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
);
