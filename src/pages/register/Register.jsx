import { Link } from "react-router-dom"
import "./register.css"

export const Register = () => {
  return (
    <div className="Register">
        <span className="RegisterTitle">Register</span>
        <form className="RegisterForm">
            <label>Username</label>
            <input type="text" className="RegisterInput" placeholder="Enter your Name" />
            <label>Email</label>
            <input type="text" className="RegisterInput" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password"  className="RegisterInput" placeholder="Enter your password" />
            <label>Phone</label>
            <input type="number" className="RegisterInput" placeholder="phone" />
            <button className="RegisterButton">Register</button>
        </form>
        <button className="RegisterLoginButton">
          <Link className="link" to ="/login">LogIn</Link>
          </button>
    </div>
  )
}
