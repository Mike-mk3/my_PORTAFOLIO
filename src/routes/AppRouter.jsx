import { Navigate, Route, Routes } from 'react-router-dom';
import Perfil from '../components/pages/Perfil';
import Proyectos from '../components/pages/Proyectos'



const NotFound = () => <h1>404: Not Found</h1>;



function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Perfil />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="404" element={<NotFound />} />

                <Route path="perfil" element={<Perfil />} />
                <Route path="proyectos" element={<Proyectos />} />
            </Routes>
        </>
    );
}

export default AppRouter;