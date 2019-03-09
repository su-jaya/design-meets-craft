import React, {Component} from "react"
import axios from "axios"

class Registration extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }

  // Change Handler Form

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // On Submit

  submitHandler = (event) => {
  event.preventDefault();
  axios.post("http://localhost:5000/signup/designer", this.state)
  .then( () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: ""
    })
    console.log(this.state)
  })
 .catch(err => console.log(err))
}

  render() {

    return (
    <div>

    {/*Registration Bar */}
    <h2>What's your profession</h2>
    <p>First, please tell us what your profession is</p>

    {/*Whats your profession */}
    <h3>Designer</h3>
    <p>or</p>
    <h3>Artisan</h3>

    {/*Create your account*/}
    <h3>Create your account</h3>
    <p>After the first steo you get an email with your access data</p>

    <form onSubmit={(event) => this.submitHandler(event)}>
    <label htmlFor="firstName">First Name</label>
    <input type="text" id="firstName" value={this.state.firstName} required onChange={(e) => this.changeHandler(e)}></input>

    <label htmlFor="lastName">Last Name</label>
    <input type="text" id="lastName" value={this.state.lastName} required onChange={(e) => this.changeHandler(e)}></input>

    <label htmlFor="email">Email</label>
    <input type="email" id="email" value={this.state.email} required onChange={(e) => this.changeHandler(e)}></input>

    <label htmlFor="password">Password</label>
    <input type="password" id="password" value={this.state.password} minLength="8" required onChange={(e) => this.changeHandler(e)}></input>

    <label htmlFor="passwordConfirm">Confirm Password</label>
    <input type="password" id="passwordConfirm" value={this.state.passwordConfirm} required onChange={(e) => this.changeHandler(e)}></input>

    <p>By clicking Sign Up, you agree to our Terms and that you have read our Privacy Policy, including our Cookie Policy</p>

    <button>Sign Up</button>
    </form>

    {/*Note*/}

   </div>  
    )
  }

}

export default Registration