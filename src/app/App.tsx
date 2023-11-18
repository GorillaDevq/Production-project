import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widjets/Navbar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;