import {Routes, Route, Navigate} from 'react-router-dom';
import {LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts';
import {authRoutes,publicRoutes} from "../routes";
import {Context} from "../index"
import {useContext} from "react";





const AppRouter = () => {
       const {user} = useContext(Context)
       return (
        <Routes>

            {/*AUTH ROUTE*/}
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>

            )}
            {/*PUBLIC ROUTE*/}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>

            )}
            {/*Error route*/}
            <Route path="*" element={<Navigate to={SHOP_ROUTE}/> } />



        </Routes>








    );
};

export default AppRouter;