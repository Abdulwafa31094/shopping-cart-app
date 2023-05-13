//import React from "react";

import { Link } from "react-router-dom";

export default function index() {
  return (
    <>
      <h1 className="display-1 text-center m-4">Register</h1>
      <div className="container">
        <form className="col g-3 needs-validation" novalidate>
          <div className="col-md-4">
            <label for="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustomUsername" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          
          <div className="col-md-4">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="col-md-4">
            <label for="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>

        <div className="m-4 g-1">
          <p>if You are already register please login here</p>
          <Link to="/Login">
            <button type="submit" className="btn btn-secondary">
              Login
            </button>
          </Link>
        </div>

      </div>
    </>
  );
}