import React from 'react';
import Navbar from "./Navbar";
import About from "./About";
import Main from "./Main";
import Skills from "./Skills";
import Contact from "./Contact";
import {RemoveScrollBar} from 'react-remove-scroll-bar';

const home = () => {
    return (
        <div className='App'>
            <RemoveScrollBar />
            <Navbar />
            <Main />
            <About />
            <Skills />
            <Contact />
        </div>
    )
}

export default home;