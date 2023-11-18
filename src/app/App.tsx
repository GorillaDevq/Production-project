import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widjets/Navbar";
import {Sidebar} from "widjets/Sidebar";
import {Suspense} from "react";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar />
                <main className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
};

export default App;