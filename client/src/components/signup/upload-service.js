import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
  withCredentials: true
});

const errorHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service,

  handleUpload(theFile, typeOfPicture) {
    return service
      .post(`/auth/signup/designer/upload/${typeOfPicture}`, theFile)
      .then(res => res.data)
      .catch(errorHandler);
  }
};
