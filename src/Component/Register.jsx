import React from 'react'
import register from './register.css'
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

import { BiLock } from "react-icons/bi";


function Register() {
  return (
    <div className="fhowe">
    <div className="container">
      <div className="d-flex mt-90">
        <div className="wrap-oi">
          <div className="sinup">
            <img
              src="./images/register-removebg-preview.jpg"
              alt=""
              style={{ width: "100%",height:" -webkit-fill-available" }}
            />
          </div>
          <div className="singup" style={{padding:"60px"}}>
           <div className="text-center">
           <h1>Sign Up</h1>
            <p>Kindly fill in this form to register.</p>
           </div>

            <span className="icons">
              <AiOutlineMail />
            </span>
            <input
              type="text"
              className="mb-3"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <br />

            <span className="icons">
              <FiPhone />
            </span>
            <input
              type="text"
              className="mb-3"
              placeholder="Mobile"
              id="mobile"
              required
            />
            <br />
            <span className="icons">
              <BiLock />
            </span>
            <input
              type="text"
              className="mb-3"
              placeholder="Password"
              name="password"
              id="password"
              required
            />
            <button
              type="submit"
              className="mb-3 mt-3"
              style={{ width: "100%" }}
            >
            Sign Up
            </button>
            <div>
              <p>
                Already have an account? <a href="/login">Signin</a>.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register