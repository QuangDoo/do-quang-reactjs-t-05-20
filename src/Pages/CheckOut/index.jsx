import React from "react";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
function CheckOut(props) {
  console.log(props);

  const [inforUser, setInforUser] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    NameOnCard: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
  });
  const handleOnChangeInfor = (e) => {
    console.log(e.target.value);
    setInforUser({
      ...inforUser,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitCheckOut = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <main>
        {/* breadcrumb-area-start */}
        <section
          className="breadcrumb-area"
          style={{ backgroundImage: 'url("/assets/page-title.png")' }}
        >
          <div className="container">
            <div className="row">
              <div className="">
                <div className="container">
                  <form onSubmit={onSubmitCheckOut}>
                    <div className="row">
                      <div className="col-50">
                        <h3>Billing Address</h3>
                        <label htmlFor="fname">
                          <i className="fa fa-user" /> Full Name
                        </label>
                        <input
                          type="text"
                          id="fname"
                          name="firstname"
                          onChange={handleOnChangeInfor}
                        />
                        <label htmlFor="email">
                          <i className="fa fa-envelope" /> Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          value={props.getEmailUser}
                          onChange={handleOnChangeInfor}
                        />
                        <label htmlFor="adr">
                          <i className="fa fa-address-card-o" /> Address
                        </label>
                        <input
                          type="text"
                          id="adr"
                          name="address"
                          onChange={handleOnChangeInfor}
                        />
                        <label htmlFor="city">
                          <i className="fa fa-institution" /> City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          onChange={handleOnChangeInfor}
                        />
                        <div className="row">
                          <div className="col-50">
                            <label htmlFor="state">State</label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              onChange={handleOnChangeInfor}
                            />
                          </div>
                          <div className="col-50">
                            <label htmlFor="zip">Zip</label>
                            <input
                              type="text"
                              id="zip"
                              name="zip"
                              onChange={handleOnChangeInfor}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-50">
                        <h3>Payment</h3>
                        <label htmlFor="fname">Accepted Cards</label>
                        <div className="icon-container">
                          <img src="./img/Credit-Card-Icons.jpg" width={150} />
                        </div>
                        <label htmlFor="cname">Name on Card</label>
                        <input
                          type="text"
                          id="cname"
                          name="cardname"
                          onChange={handleOnChangeInfor}
                        />
                        <label htmlFor="ccnum">Credit card number</label>
                        <input
                          type="text"
                          id="ccnum"
                          name="cardnumber"
                          onChange={handleOnChangeInfor}
                        />
                        <label htmlFor="expmonth">Exp Month</label>
                        <input
                          type="text"
                          id="expmonth"
                          name="expmonth"
                          onChange={handleOnChangeInfor}
                        />
                        <div className="row">
                          <div className="col-50">
                            <label htmlFor="expyear">Exp Year</label>
                            <input
                              type="text"
                              id="expyear"
                              name="expyear"
                              onChange={handleOnChangeInfor}
                            />
                          </div>
                          <div className="col-50">
                            <label htmlFor="cvv">CVV</label>
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              onChange={handleOnChangeInfor}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <label>
                      <input
                        type="checkbox"
                        defaultChecked="checked"
                        name="sameadr"
                      />{" "}
                      Shipping address same as billing
                    </label>
                    <input
                      type="submit"
                      defaultValue="Continue to checkout"
                      className="btn"
                    />
                  </form>
                </div>
              </div>
              <div className="col-25">
                <div className="container">
                  <h4>
                    Cart
                    <span className="price" style={{ color: "black" }}>
                      <i className="fa fa-shopping-cart" />
                      <b>{props.productsCheckout.length}</b>
                    </span>
                  </h4>
                  {props.productsCheckout.map((item) => (
                    <p>
                      <Link to={`/product-detail/${item.id}`}>
                        {item.name} ({item.quantity})
                      </Link>
                      <span className="price">{item.price}</span>
                    </p>
                  ))}
                  <hr />
                  <p>
                    Total
                    <span className="price" style={{ color: "black" }}>
                      <b>
                        {props.productsCheckout.reduce(
                          (totalPrice, item) =>
                            (totalPrice += item.quantity * item.price),
                          0
                        )}
                      </b>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
const mapStateTopProps = (state) => {
  return {
    productsCheckout: state.productInCartReducer.productInCart,
    getEmailUser: state.loginReducer.email,
  };
};
export default connect(mapStateTopProps, null)(CheckOut);
