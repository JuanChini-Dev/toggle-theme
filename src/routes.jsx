import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { StatisticsPage } from "./pages/StatisticsPage";

export const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        element={
          <>
            <HomePage />
          </>
        }
      ></Route>
      <Route exact path="/statistics" element={<StatisticsPage />}></Route>
      <Route exact path="/customers" element={<h1>Customers Page</h1>}></Route>
      <Route exact path="/diagrams" element={<h1>Diagrams Page</h1>}></Route>
      <Route exact path="/profile" element={<h1>Profile Page</h1>}></Route>
    </Switch>
  );
};
