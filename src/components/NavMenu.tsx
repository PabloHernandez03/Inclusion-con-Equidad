import { NavLink } from 'react-router-dom';

export default function NavMenu() {
    return (
        <nav className="flex gap-1 flex-wrap text-white">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `bg-caverna text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-caverna bg-[#FFD801]' : ''}`
                }
            >
                Inicio
            </NavLink>
            <NavLink
                to="/lo-nuevo"
                className={({ isActive }) =>
                    `bg-caverna text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-caverna bg-[#FFD801]' : ''}`
                }
            >
                Lo Nuevo
            </NavLink>
            <NavLink
                to="/turismo-inclusivo"
                className={({ isActive }) =>
                    `bg-caverna text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-caverna bg-[#FFD801]' : ''}`
                }
            >
                Turismo Inclusivo
            </NavLink>
            <NavLink
                to="/deporte-inclusivo"
                className={({ isActive }) =>
                    `bg-caverna text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-caverna bg-[#FFD801]' : ''}`
                }
            >
                Deporte Inclusivo
            </NavLink>
            <NavLink
                to="/acceso-informacion"
                className={({ isActive }) =>
                    `bg-caverna text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-caverna bg-[#FFD801]' : ''}`
                }
            >
                Acceso a la Información
            </NavLink>
            <NavLink
                to="/capacitacion"
                className={({ isActive }) =>
                    `bg-caverna text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-white border-caverna bg-acido' : ''}`
                }
            >
                Capacitación
            </NavLink>
            <NavLink
                to="/donativos"
                className={({ isActive }) =>
                    `bg-caverna text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-white border-caverna bg-acido' : ''}`
                }
            >
                Donativos
            </NavLink>
            <NavLink
                to="/consejo-directivo"
                className={({ isActive }) =>
                    `bg-caverna text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-white border-caverna bg-acido' : ''}`
                }
            >
                Consejo Directivo
            </NavLink>
            <NavLink
                to="/actividades"
                className={({ isActive }) =>
                    `bg-caverna text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-white border-caverna bg-acido' : ''}`
                }
            >
                Actividades
            </NavLink>
            <NavLink
                to="/viajes"
                className={({ isActive }) =>
                    `bg-caverna text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-white border-caverna bg-acido' : ''}`
                }
            >
                Viajes
            </NavLink>
        </nav>
    );
}