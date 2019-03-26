import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000/auth",
  withCredentials: true
});

const errorHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service,

  handleUpload(theFile) {
    return service
      .post("/signup/designer/upload", theFile)
      .then(res => res.data)
      .catch(errorHandler);
  }
};
