import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Work from 'pages/Work';
import Feature from 'pages/Feature';
import Blog from 'pages/Blog';
import About from 'pages/About';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound';

function routes() {
    return(
        <Router>
        	<Switch>
                <Route exact path="/" component={Home} />
                <Route path="/work" component={Work} />
                <Route path="/feature" component={Feature} />
                <Route path="/blog" component={Blog} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}
export default routes;