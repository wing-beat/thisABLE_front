import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getPlaceList = () => {
  return axios
    .get(baseUrl + "/?latitude=37.5441270&longitude=126.9667812&page=1")
    .then((response) => {
      return response.data;
    });
};
