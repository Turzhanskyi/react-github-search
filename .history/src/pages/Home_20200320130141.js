import React, { Fragment } from "react";
import { Search } from "../components/Search";
import { Card } from "../components/Card";

export const Home = () => {
  const {}

  return (
    <Fragment>
      <Search />

      <div className="row">
        {cards.map(card => {
          return (
            <div className="col-sm-4 mb-5" key={card}>
              <Card />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
