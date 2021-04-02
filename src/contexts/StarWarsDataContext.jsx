import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import axios, { api } from '../services/api';

export const StarWarsDataContext = createContext({});

export const StarWarsDataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [planetsAndMoons, setPlanetsAndMoons] = useState([]);
  const [starships, setStarships] = useState([]);

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

      const { data: moviesData } = await api.get('films');
      const charactersRequest = createRequestUrlByPage(9, 'people');
      const planetsAndMoonsRequest = createRequestUrlByPage(6, 'planets');
      const starshipsRequest = createRequestUrlByPage(4, 'vehicles');

      const requests = await axios.all([
        charactersRequest,
        planetsAndMoonsRequest,
        starshipsRequest,
      ]);

      const [charactersData, planetsAndMoonsData, starshipsData] = requests.map(
        (request) => {
          const results = request.reduce((acc, { data }) => {
            acc.push(...data.results);
            return acc;
          }, []);
          return results;
        },
      );

      setMovies(moviesData);
      setCharacters(charactersData);
      setPlanetsAndMoons(planetsAndMoonsData);
      setStarships(starshipsData);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <StarWarsDataContext.Provider
      value={{ movies, characters, planetsAndMoons, starships, loading, error }}
    >
      {children}
    </StarWarsDataContext.Provider>
  );
};

StarWarsDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
