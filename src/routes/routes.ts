import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Routes {
    to: string;
    path: string;
    Component: JSXComponent | React.LazyExoticComponent<JSXComponent> | any;
    name: string;
}

// ? Función de prueba para demostrar el funcionamiento de Suspend
const delayDemo = ( promise: any ) => {
    return new Promise( resolve => {
        setTimeout( resolve, 1000);
    }).then( () => promise );
}

// const LazyPage = lazy( () => delayDemo(import( '../01-lazyload/pages/LazyPage')) )
const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyPage2Chunk" */ '../01-lazyload/layout/LazyLayout') )

export const routes: Routes[] = [
    {
        path: '/dashboard/*',
        to: '/dashboard/',
        Component: LazyLayout,
        name: 'LazyLayout - Dashboard',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'NoLazy',
    },

]
