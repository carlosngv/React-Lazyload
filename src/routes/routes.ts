import { lazy } from "react";
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

const LazyPage = lazy( () => delayDemo(import( '../01-lazyload/pages/LazyPage')) )
const LazyPage2 = lazy( () => import(/* webpackChunkName: "LazyPage2Chunk" */ '../01-lazyload/pages/LazyPage2') )
const LazyPage3 = lazy( () => import(/* webpackChunkName: "LazyPage3_chunk" */ '../01-lazyload/pages/LazyPage3') )

export const routes: Routes[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: LazyPage,
        name: 'Lazy-1',
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: LazyPage2,
        name: 'Lazy-2',
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: LazyPage3,
        name: 'Lazy-3',
    },
]
