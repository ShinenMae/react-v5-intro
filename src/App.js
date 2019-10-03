import React from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));
const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
      <Suspense fallback={<h1>loading route ...</h1>}>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
        </Suspense>;
      </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
  ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

export default App;
