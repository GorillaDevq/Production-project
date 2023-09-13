import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from "pages/MainPage";
import {Suspense} from 'react';
import {Link, Route, Routes,} from "react-router-dom";
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Main</Link>
            <Link to={'/About'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;