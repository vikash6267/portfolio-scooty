

const BASE_URL = "http://localhost:4000/api/v1"

export const endpoints = {
  LOGIN_API: "http://localhost:4000/api/v1/user/admin",
  DOWNLOAD_API: BASE_URL + "/user/download",
  CONTACT_US_API: BASE_URL + "/reach/contact",
  ADD_OFFER_API: BASE_URL + "/scooty/createScooty",
  ALL_OFFER_SCOOTY: BASE_URL + "/scooty/getScooty",
  ALL_SERVICE_SCOOTY: BASE_URL + "/scooty/addSerive",
  GET_ALL_SERVICE_SCOOTY: BASE_URL + "/scooty/getAllServices",


  DELETE_SCOOTY: BASE_URL + "/scooty/deleteScooty",
  DELETE_SERIVICE: BASE_URL + "/scooty/deleteService",

  ENQUIRY_API: BASE_URL + "/reach/enquiry"



}