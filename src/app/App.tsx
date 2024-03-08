import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widjets/Navbar';
import { Sidebar } from 'widjets/Sidebar';
import { Suspense, useEffect } from 'react';
import { PageLoader } from 'widjets/PageLoader';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { useTheme } from './providers/ThemeProvider';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <main className="content-page">
                    <Sidebar />
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
}

export default App;
