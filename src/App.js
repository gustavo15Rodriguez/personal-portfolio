import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Introduction from './components/introduction-section/Introduction';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Stats from './components/stats/Stats';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Introduction />
            <About />
            <Resume />
            <Portfolio />
            <Services />
            <Stats />
            <Contact />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
