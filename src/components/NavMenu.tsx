import { NavLink } from 'react-router-dom';

export default function NavMenu() {
    return (
        <nav className="flex gap-1 flex-wrap text-white">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-caverna bg-[#FFD801]' : 'bg-caverna'}`
                }
            >
                Inicio
            </NavLink>
            <NavLink
                to="/lo-nuevo"
                className={({ isActive }) =>
                    `text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-caverna bg-[#FFD801]' : 'bg-caverna'}`
                }
            >
                Lo Nuevo
            </NavLink>
            <NavLink
                to="/turismo-inclusivo"
                className={({ isActive }) =>
                    `text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-caverna bg-[#FFD801]' : 'bg-caverna'}`
                }
            >
                Turismo Inclusivo
            </NavLink>
            <NavLink
                to="/deporte-inclusivo"
                className={({ isActive }) =>
                    `text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-caverna bg-[#FFD801]' : 'bg-caverna'}`
                }
            >
                Deporte Inclusivo
            </NavLink>
            <NavLink
                to="/acceso-informacion"
                className={({ isActive }) =>
                    `text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-caverna bg-[#FFD801]' : 'bg-caverna'}`
                }
            >
                Acceso a la Información
            </NavLink>
            <NavLink
                to="/capacitacion"
                className={({ isActive }) =>
                    `text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-white border-caverna bg-bg-cavernaacido' : ''}`
                }
            >
                Capacitación
            </NavLink>
            <NavLink
                to="/donativos"
                className={({ isActive }) =>
                    `text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-white border-caverna bg-bg-cavernaacido' : ''}`
                }
            >
                Donativos
            </NavLink>
            <NavLink
                to="/consejo-directivo"
                className={({ isActive }) =>
                    `text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-white border-caverna bg-bg-cavernaacido' : ''}`
                }
            >
                Consejo Directivo
            </NavLink>
            <NavLink
                to="/actividades"
                className={({ isActive }) =>
                    `text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-white border-caverna bg-bg-cavernaacido' : ''}`
                }
            >
                Actividades
            </NavLink>
            <NavLink
                to="/viajes"
                className={({ isActive }) =>
                    `text-acido font-bold border border-acido hover:bg-acido hover:text-caverna p-2 px-3 rounded-sm ${isActive ? 'text-white border-caverna bg-bg-cavernaacido' : ''}`
                }
            >
                Viajes
            </NavLink>
        </nav>
    );
}