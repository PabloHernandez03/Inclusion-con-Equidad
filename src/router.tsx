import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import DashBoardView from './views/DashBoardViews'
import LoNuevo from './views/LoNuevo'
import TurismoInclusivo from './views/TurismoInclusivo'
import DeporteInclusivo from './views/DeporteInclusivo'
import AccesoInformacion from './views/AccesoInformacion'
import Capacitacion from './views/Capacitacion'
import Donativos from './views/Donativos'
import ConsejoDirectivo from './views/ConsejoDirectivo'
import Actividades from './views/Actividades'
import Viajes from './views/Viajes'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashBoardView />} index />
                    <Route path="/lo-nuevo" element={<LoNuevo />} />
                    <Route path="/turismo-inclusivo" element={<TurismoInclusivo />} />
                    <Route path="/deporte-inclusivo" element={<DeporteInclusivo />} />
                    <Route path="/acceso-informacion" element={<AccesoInformacion />} />
                    <Route path="/capacitacion" element={<Capacitacion />} />
                    <Route path="/donativos" element={<Donativos />} />
                    <Route path="/consejo-directivo" element={<ConsejoDirectivo />} />
                    <Route path="/actividades" element={<Actividades />} />
                    <Route path="/viajes" element={<Viajes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};