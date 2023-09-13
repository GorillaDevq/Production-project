import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore плохая практика
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));
