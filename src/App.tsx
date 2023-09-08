import {Suspense} from 'react';
import {Link, Route, Routes,} from "react-router-dom";

import './styles/index.scss';

import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

import useTheme from "./theme/useTheme";

import {classNames} from "./helpers/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Main</Link>
            <Link to={'/About'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;