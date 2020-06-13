import React, { useState } from "react";
import Layout from "../../components/layout";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
function Register() {
  const [err, setErr] = useState("");
  const [valueRegister, setValueRegister] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {  
    setValueRegister({
      ...valueRegister,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitRegister = (e) => {
    e.preventDefault();
    register(valueRegister);
  };
  const history = useHistory();
  const register = async (data) => {
    try {
      const result = await axios({
        method: "POST",
        url: "https://min-shop.herokuapp.com/rest/user/signUp",
        data,
      });
      console.log(result);
      history.push("/login");
      swal({
        title: "Register successfully",
        icon: "success",
        timer: 2000,
        buttons: false,
      });
    } catch (err) {
      // console.log(err.response.data.message);
      setErr(err.response.data.message);
      console.log(err);
      
    }
  };
  return (
    <Layout productsInCart={[]}>
      <main>
        {/* breadcrumb-area-start */}
        <section
          className="breadcrumb-area"
          style={{ backgroundImage: 'url("/assets/page-title.png")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Register</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>Register</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* login Area Strat*/}
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Sign Up From Here</h3>
                  <form action="#" onSubmit={onSubmitRegister}>
                    <span className="text-danger">{err}</span>
                    <label htmlFor="name">
                      Full Name <span>**</span>
                    </label>
                    <input
                      name="username"
                      id="name"
                      type="text"
                      placeholder="Enter Username or Email address..."
                      onChange={onChange}
                    />
                    <label htmlFor="email-id">
                      Email Address <span>**</span>
                    </label>
                    <input
                      name="email"
                      id="email-id"
                      type="email"
                      placeholder="Enter Username or Email address..."
                      onChange={onChange}
                    />
                    <label htmlFor="pass">
                      Password <span>**</span>
                    </label>
                    <input
                      name="password"
                      id="pass"
                      type="password"
                      placeholder="Enter password..."
                      onChange={onChange}
                    />
                    <div className="mt-10" />
                    <button className="btn theme-btn-2 w-100">
                      Register Now
                    </button>
                    <div className="or-divide">
                      <span>or</span>
                    </div>
                    <Link to={`/login`} className="btn theme-btn w-100">
                      login Now
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* login Area End*/}
      </main>
    </Layout>
  );
}

export default Register;
