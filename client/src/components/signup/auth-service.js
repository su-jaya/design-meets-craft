import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
      withCredentials: true
    });
    this.service = service;
  }

  signup = (firstName, lastName, email, password, passwordConfirm, role) => {
    return this.service
      .post("/auth/signup", {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
        role
      })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/auth/loggedin").then(response => response.data);
  };

  login = (email, password) => {
    return this.service
      .post("/auth/login/designer", { email, password })
      .then(response => response.data);
  };

  logout = () => {
    return this.service
      .post("/auth/logout", {})
      .then(response => response.data);
  };
}

export default AuthService;
