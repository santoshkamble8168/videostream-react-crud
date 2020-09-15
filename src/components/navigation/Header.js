import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import GoogleAuth from '../auth/GoogleAuth';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Stream</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link active">Streams</Link>
                        </div>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <GoogleAuth/>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header;
