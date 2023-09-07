import React, {Suspense} from 'react';
import Counter from "../Counter/Counter";
import './index.scss';
import {Link, Route, Routes,} from "react-router-dom";
import {MainPageAsync} from "../../pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../../pages/AboutPage/AboutPage.async";

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Main</Link>
            <Link to={'/About'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
            <Counter/>
        </div>
    );
};

export default App;