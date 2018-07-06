import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="content-container">
      
      <div className="header__content">
      <Link className="header__title" to="/">
        <h1 > LAND USE VICTORIA - Document Hub</h1>
      </Link>
       
      </div>
    </div>
  </header>
);

export default Header;
 // <NavLink to="/" className="header__title" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        // <NavLink to="/create" className="header__title" activeClassName="is-active">Add Dealing</NavLink>