import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to={'/brands'} className={'navbar-brand'}>
              PoS
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <Link to={'/brands'}>Marcas</Link>
              </li>
              <li className="active">
                <Link to="/providers">Proveedores</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;