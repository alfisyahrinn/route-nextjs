'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname()
  return (
    <nav
      className="navbar navbar-expand-lg bg-light border-3"
      data-bs-theme="light"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Meden12
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={`nav-link ${pathName === '/' && 'active'}`} href="/">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathName === '/dashboard' && 'active'}`} href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathName === '/product' && 'active'}`} href="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathName === '/analytics' && 'active'}`} href="/analytics">
              analytics
              </Link>
            </li>
            
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
