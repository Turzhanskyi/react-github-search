import React, { useReducer } from "react";
import axios from "axios";
import { GithubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING
} from "../types";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  };

  const [state, dispath] = useReducer(githubReducer, initialState);

  const search = async value => {
    setLoading();

    const response = aw
    dispath({
      type: SEARCH_USERS,
      payload: []
    });
  };

  const getUser = async name => {
    setLoading();
    dispath({
      type: GET_USER,
      payload: []
    });
  };

  const getRepos = async name => {
    setLoading();
    dispath({
      type: GET_REPOS,
      payload: []
    });
  };

  const clearUsers = () => dispath({ type: CLEAR_USERS });

  const setLoading = () => dispath({ type: SET_LOADING });

  const { user, users, repos, loading } = state;

  return (
    <GithubContext.Provider
      value={{
        setLoading,
        search,
        getUser,
        getRepos,
        clearUsers,
        user,
        users,
        repos,
        loading
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
