import React from "react";

export default function Login() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card border-primary mb-3">
        <div className="card-header">Login</div>
        <div className="card-body">
          <div className="form-group">
            <label className="form-label mt-4">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We&apos;ll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
