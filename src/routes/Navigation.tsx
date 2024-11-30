import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import reactLogo from '../assets/react.svg'
import { routes } from "./routes";
import { Suspense } from "react";



export const Navigation = () => {
    return (
        // ? El Suspense sirve para mostrar "algo" especificado en el atributo "fallback"
        // ? en lo que carga los componentes por demanda (lazy loading)
        <Suspense fallback={ <span>Loading...</span> }>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ reactLogo } alt="React Logo" />
                        <ul>
                            {
                                routes.map( route => (
                                    <li key={ route.to }>
                                        <NavLink to={ route.to } className={ ({ isActive }) => isActive ? 'nav-active': '' } >{ route.name }</NavLink>
                                    </li>
                                ))
                            }

                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map( route => (
                                <Route key={ route.to } path={ route.path } element={ <route.Component />} />
                            ))
                        }
                        <Route path='*' element={ <Navigate to={ routes[0].to } replace />  } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
