import axios from 'axios';
const baseURL = `${import.meta.env.VITE_WORKOUT_API}/api`;

const setAuthorisationHeaders = () => {
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  });
};

setAuthorisationHeaders();

//! GET ALL WORKOUTS FROM THE USER:

export const getAllWorkouts = userId => {
  return axios.get(`${baseURL}/workout/${userId}`);
};
