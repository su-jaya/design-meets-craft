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
      .then(res => {
        return { secure_url: res.data.secure_url, theUser: res.data.theUser };
      })
      .catch(errorHandler);
  }
};
//
