import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Switch } from "react-router-dom";
import RouterComponent from "./components/Router";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Helmet>
        <title>3Wishesgh</title>
        <meta
          name="description"
          content="3WishesHookah Ghana's One Stop Smoking Shop."
        />
        <meta
          name="keywords"
          content="3Wishes, Smoke, Hookah, Hookah Ghana, Bar, Shop, Hookah Lounge"
        />
      </Helmet>
      <TopHeader />
      <BrowserRouter>
        <Switch>
          <RouterComponent />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
