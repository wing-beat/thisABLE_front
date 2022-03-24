import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getPlaceList = () => {
  return axios
    .get(baseUrl + "/?latitude=37.5441270&longitude=126.9667812&page=1")
    .then((response) => {
      return response.data;
    });
};

export const getPlaceDetail = (id) => {
  return axios.get(baseUrl + "/" + id).then((response) => {
    return response.data;
  });
};

export const getPlaceDetailCharger = (id) => {
  return axios.get(baseUrl + "/" + id + "/charger").then((response) => {
    return response.data;
  });
};

export const getReview = (id) => {
  return axios.get(baseUrl + "/" + id + "/review").then((response) => {
    return response.data;
  });
};

export const postReview = (locationId, detail, stare) => {
  return axios
    .post(baseUrl + "/review", {
      locationId: locationId,
      detail: detail,
      stare: stare,
    })
    .then((response) => {
      return response.data;
    });
};

export const postReviewRecommend = (reviewId) => {
  return axios
    .post(baseUrl + "/review/recommend", {
      reviewId: reviewId,
    })
    .then((response) => {
      return response.data;
    });
};

export const postReviewDiscourage = (reviewId) => {
  return axios
    .post(baseUrl + "/review/discourage", {
      reviewId: reviewId,
    })
    .then((response) => {
      return response.data;
    });
};
