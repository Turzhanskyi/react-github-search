import React, { Fragment } from "react";
import { Search } from "../components/Search";
import { Card } from "../components/Card";
import { GithubContext } from "../context/github/githubContext";

export const Home = () => {
  const {loading, user} = useContext(GithubContext)

  return (
    <Fragment>
      <Search />

      {
        loading
        ? <p className='text-center'>Завантаження...</p>
        : users.map(user => (
            <div className="col-sm-4 mb-5" key={user.id}>
              <Card user={user} />
            </div>
          ))
          ;
      
      }

      <div className="row">
        {
      </div>
    </Fragment>
  );
};
