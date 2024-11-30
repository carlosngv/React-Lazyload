import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage, LazyPage2,LazyPage3 } from "../pages";

const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>
        {/* Rutas hijas irían acá */}
        <ul>
          <li>
            <NavLink to="lazy1">Lazy 1</NavLink>
          </li>
          <li>
            <NavLink to="lazy2">Lazy 2</NavLink>
          </li>
          <li>
            <NavLink to="lazy3">Lazy 3</NavLink>
          </li>
        </ul>


        <Routes>
          <Route path="lazy1" element={ <LazyPage /> }></Route>
          <Route path="lazy2" element={ <LazyPage2 /> }></Route>
          <Route path="lazy3" element={ <LazyPage3 /> }></Route>
          <Route path="*" element={ <Navigate replace to='lazy1' /> }></Route>
        </Routes>

    </div>
  )
}

export default LazyLayout;
