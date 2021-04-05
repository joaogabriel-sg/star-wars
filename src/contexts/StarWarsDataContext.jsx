import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import axios, { api } from '../services/api';

export const StarWarsDataContext = createContext({});

export const StarWarsDataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function createRequestUrlByPage(totalPages, endpoint) {
    const requests = [];
    for (let i = 1; i <= totalPages; i += 1) {
      const params = new URLSearchParams([['page', i]]);
      requests.push(api.get(endpoint, { params }));
    }
    return axios.all(requests);
  }

  useEffect(async () => {
    try {
      setLoading(true);
      setError(false);

      const moviesRequest = createRequestUrlByPage(1, 'films');
      const charactersRequest = createRequestUrlByPage(9, 'people');
      const planetsRequest = createRequestUrlByPage(6, 'panets');
      const starshipsRequest = createRequestUrlByPage(4, 'starships');
      const vehiclesRequest = createRequestUrlByPage(4, 'vehicles');

      const requests = await axios.all([
        moviesRequest,
        charactersRequest,
        planetsRequest,
        starshipsRequest,
        vehiclesRequest,
      ]);

      const [
        moviesData,
        charactersData,
        planetsData,
        starshipsData,
        vehiclesData,
      ] = requests.map((request) => {
        const results = request.reduce((acc, { data }) => {
          acc.push(...data.results);
          return acc;
        }, []);
        return results;
      });

      setMovies(moviesData);
      setCharacters(charactersData);
      setPlanets(planetsData);
      setStarships(starshipsData);
      setVehicles(vehiclesData);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <StarWarsDataContext.Provider
      value={{
        movies,
        characters,
        planets,
        starships,
        vehicles,
        loading,
        error,
      }}
    >
      {children}
    </StarWarsDataContext.Provider>
  );
};

StarWarsDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
