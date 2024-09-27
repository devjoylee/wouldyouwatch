import axios from 'axios';

const Config = {
  baseURL: 'https://api.themoviedb.org/3/movie',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjljNzg0ZWNmOGEwNjI5YmNhNDY4NjYxZTkwNmJhMyIsIm5iZiI6MTcyNzQxNzI2NS4yMDAxMTcsInN1YiI6IjY0MWEyMDRhOWU0MDEyMDA4NWY1ZTdhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J1HyBwQkmigqKN3XcfG64mmuy3lJ7yEAZt0wgOCz6Ms',
};

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/upcoming`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    return { success: true, data: response.data, status: response.status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/now_playing`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    return { success: true, data: response.data, status: response.status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/popular`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    return { success: true, data: response.data, status: response.status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/top_rated`, {
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    return { success: true, data: response.data, status: response.status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};
