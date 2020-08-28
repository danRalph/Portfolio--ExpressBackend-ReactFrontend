import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



class App extends React.Component {
    render() {
        return (
            <div className="App">              
                <Route
                    exact
                    path='/'
                    render={routeProps => <Home {...routeProps} />}
                />
                <Route
                    exact
                    path='/about'
                    render={routeProps => <About {...routeProps} />}
                />
                <Route
                    exact
                    path='/projects'
                    render={routeProps => <Projects {...routeProps} />}
                />
                <Route
                    exact
                    path='/contact'
                    render={routeProps => <Contact {...routeProps} />}
                />
                <Footer />  
            </div>
        );
    }
}

export default App;
