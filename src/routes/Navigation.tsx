import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import reactLogo from '../assets/react.svg'
import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikBasicYupPage } from "../03-forms/pages/FormikBasicYupPage";
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { FormikAbstract } from "../03-forms/pages/FormikAbstract";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ reactLogo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active': '' } >Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active': '' } >Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active': '' } >Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstract" className={ ({ isActive }) => isActive ? 'nav-active': '' } >Formik Abstract</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/register' element={ <RegisterPage />} />
                    <Route path='/formik-basic' element={ <FormikBasicYupPage /> } />
                    <Route path='/formik-components' element={ <FormikComponents /> } />
                    <Route path='/formik-abstract' element={ <FormikAbstract /> } />
                    <Route path='*' element={ <Navigate to='/lazy1' replace />  } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
