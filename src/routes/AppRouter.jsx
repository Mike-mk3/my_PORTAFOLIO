import { Navigate, Route, Routes } from 'react-router-dom';
import Perfil from '../pages/Perfil';



const NotFound = () => <h1>404: Not Found</h1>;



function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="404" element={<NotFound />} />

                <Route path="perfil" element={<Perfil />} />
            </Routes>
        </>
    );
}

export default AppRouter;