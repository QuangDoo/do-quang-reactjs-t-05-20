import React from "react";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import { useState } from "react";
import {swal} from "sweetalert"
function CheckOut(props) {
  console.log(props);

  const [inforUser, setInforUser] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    nameOnCard: "",
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
          <div className="container wow fadeIn">
            {/* Heading */}
            <h2 className="my-5 h2 text-center">Checkout form</h2>
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-8 mb-4">
                {/*Card*/}
                <div className="card">
                  {/*Card content*/}
                  <form className="card-body" onSubmit={onSubmitCheckOut}>
                    {/*Grid row*/}
                    <div className="row">
                      {/*Grid column*/}
                      <div className="col-md-12 mb-2">
                        {/*firstName*/}
                        <div className="md-form ">
                          <input
                            type="text"
                            id="firstName"
                            name="fullname"
                            className="form-control"
                            onChange={handleOnChangeInfor}
                          />
                          <label htmlFor="firstName" className>
                            Full name
                          </label>
                        </div>
                      </div>

                      {/*Grid column*/}
                    </div>
                    {/*Grid row*/}

                    {/*email*/}
                    <div className="md-form mb-5">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        disabled
                        onChange={handleOnChangeInfor}
                        value={props.getEmailUser}
                      />
                      <label htmlFor="email" className>
                        Email
                      </label>
                    </div>
                    {/*address*/}
                    <div className="md-form mb-5">
                      <input
                        type="text"
                        id="address"
                        className="form-control"
                        onChange={handleOnChangeInfor}
                      />
                      <label htmlFor="address" className>
                        Address
                      </label>
                    </div>

                    {/*Grid row*/}
                    <div className="row">
                      {/*Grid column*/}
                      <div className="col-lg-4 col-md-12 mb-4">
                        <label>City</label>
                        <select
                          className="custom-select d-block w-100"
                          id="country"
                          name="city"
                          required
                          onChange={handleOnChangeInfor}
                        >
                          <option value>Choose...</option>
                          <option>NY</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-lg-4 col-md-6 mb-4">
                        <label htmlFor="state">State</label>
                        <select
                          className="custom-select d-block w-100"
                          id="state"
                          name="state"
                          required

                          onChange={handleOnChangeInfor}
                        >
                          <option value>Choose...</option>
                          <option>California</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-lg-4 col-md-6 mb-4">
                        <label htmlFor="zip">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          name="zipcode"
                          placeholder
                          required
                          onChange={handleOnChangeInfor}
                        />
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                      {/*Grid column*/}
                    </div>
                    {/*Grid row*/}
                    <hr />
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="same-address"
                        onChange={handleOnChangeInfor}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="same-address"
                      >
                        Shipping address is the same as my billing address
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="save-info"
                        onChange={handleOnChangeInfor}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="save-info"
                      >
                        Save this information for next time
                      </label>
                    </div>
                    <hr />
                    <div className="d-block my-3">
                      <div className="custom-control custom-radio">
                        <input
                          id="credit"
                          name="paymentMethod"
                          type="radio"
                          className="custom-control-input"
                          defaultChecked
                          required
                          onChange={handleOnChangeInfor}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="credit"
                        >
                          Credit card
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          id="debit"
                          name="paymentMethod"
                          type="radio"
                          className="custom-control-input"
                          required
                          onChange={handleOnChangeInfor}
                        />
                        <label className="custom-control-label" htmlFor="debit">
                          Debit card
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          id="paypal"
                          name="paymentMethod"
                          type="radio"
                          className="custom-control-input"
                          required
                          onChange={handleOnChangeInfor}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="paypal"
                        >
                          Paypal
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-name">Name on card</label>
                        <input
                          type="text"
                          className="form-control"
                          name="nameOnCard"
                          id="cc-name"
                          placeholder
                          required
                          onChange={handleOnChangeInfor}
                        />
                        <small className="text-muted">
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-number">Credit card number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          name="cardNumber"
                          placeholder
                          required
                          onChange={handleOnChangeInfor}
                        />
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <label htmlFor="cc-expiration">Expiration</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          name="expMonth"
                          placeholder
                          required
                          onChange={handleOnChangeInfor}
                        />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <label htmlFor="cc-expiration">CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder
                          required
                          onChange={handleOnChangeInfor}
                        />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Continue to checkout
                    </button>
                  </form>
                </div>
                {/*/.Card*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-4 mb-4">
                {/* Heading */}
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Your cart</span>
                  <span className="badge badge-secondary badge-pill">
                    {props.productsCheckout.length}
                  </span>
                </h4>
                {/* Cart */}
                <ul className="list-group mb-3 z-depth-1">
                  {props.productsCheckout.map((item) => (
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">
                          {item.name} ({item.quantity})
                        </h6>
                        <small className="text-muted">Brief description</small>
                      </div>
                      <span className="text-muted">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <hr />
                <p>
                  <h4 className="text-muted d-inline-block">Total</h4>

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
                {/* Cart */}
                {/* Promo code */}
                <form className="card p-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Promo code"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-secondary btn-md m-0"
                        type="button"
                      >
                        Redeem
                      </button>
                    </div>
                  </div>
                </form>
                {/* Promo code */}
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
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
