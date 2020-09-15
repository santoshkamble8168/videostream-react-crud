import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';

import Header from './navigation/Header';
import StreamList from './strems/StreamList';
import StreamCreate from './strems/StreamCreate';
import StreamEdit from './strems/StreamEdit';
import StreamDelete from './strems/StreamDelete';
import StreamShow from './strems/StreamShow';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    <Header />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={StreamList} />
                            <Route path="/streams/create" exact component={StreamCreate} />
                            <Route path="/streams/edit/:id" exact component={StreamEdit} />
                            <Route path="/streams/delete/:id" exact component={StreamDelete} />
                            <Route path="/streams/:id" exact component={StreamShow} />
                        </Switch>
                    </div>
                </Router>
            </React.Fragment>
        )
    }
}

export default App;
