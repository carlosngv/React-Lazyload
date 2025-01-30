import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import reactLogo from '../assets/react.svg'
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicYupPage } from "../03-forms/pages/FormikBasicYupPage";
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { FormikAbstract } from "../03-forms/pages/FormikAbstract";
import { RegisterFormikPage } from "../03-forms/pages/RegisterFormikPage";
import { DynamicForm } from "../03-forms/pages/DynamicForm";

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
                        <li>
                            <NavLink to="/register-formik" className={ ({ isActive }) => isActive ? 'nav-active': '' } >Register Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-formik" className={ ({ isActive }) => isActive ? 'nav-active': '' } >Dynamic Formik</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/register' element={ <RegisterPage />} />
                    <Route path='/formik-basic' element={ <FormikBasicYupPage /> } />
                    <Route path='/formik-components' element={ <FormikComponents /> } />
                    <Route path='/formik-abstract' element={ <FormikAbstract /> } />
                    <Route path='/register-formik' element={ <RegisterFormikPage /> } />
                    <Route path='/dynamic-formik' element={ <DynamicForm /> } />
                    <Route path='*' element={ <Navigate to='/lazy1' replace />  } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
