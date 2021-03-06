import React from "react";
import { Link } from "react-router-dom";

export const Card = ({user}) => (
  <div className="card">
    <div className="card-body">
      <img src={user.avatar_url} alt={user.login} className="card-img-top" />
      <h5 className="card-title">{user.lo}</h5>
      <Link to={"/profile/"} className="btn btn-primary">
        Відкрити
      </Link>
    </div>
  </div>
);
