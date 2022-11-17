import axiosClient from '../client';

const civilizationsUrl = process.env.REACT_APP_AOE2_API_BASE_URL;

export const getAllCivilizations = () => {
  const url = `${civilizationsUrl}/civilizations`;
  return axiosClient.get(url);
};
