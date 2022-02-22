import React, {createContext, useState} from 'react';

export const MovieContext = createContext();

const MovieProvider = props => {
  const [movies, setMovies] = useState([]);
  const [file, setFile] = useState(null);

  return (
    <MovieContext.Provider value={{movies, setMovies, file, setFile}}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieProvider;
