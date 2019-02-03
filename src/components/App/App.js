/**
 * Created by Maks on 27.01.2019.
 */
import React, {Component} from 'react';

import Header from '../Header';
import Footer from '../Footer';

import routes from '../../routes';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
            <div>
                <Header />

                    <div className="container">
                        {routes.map(({component, path, name, isExact}) => <Route path={path} exact={isExact} component={component} key={name} />)}
                    </div>

                <Footer />
            </div>
            </Router>
        )
    }
}

export default App;