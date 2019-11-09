  const getMoviesFromApiAsync = ()=> {
  try { 
          return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
              return responseJson.movies;
            })
            .catch((error) => {
            console.error('error',error);
            });
      } catch (error) {
          reject(error)
      }
  }

  export {getMoviesFromApiAsync}