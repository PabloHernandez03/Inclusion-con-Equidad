import { NavLink } from 'react-router-dom';

export default function NavMenu() {
    return (
        <nav className="flex gap-1 flex-wrap text-white">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `bg-acido text-caverna font-bold border border-caverna hover:bg-caverna hover:text-acido hover:border-acido p-2 px-3 rounded-sm ${isActive ? 'text-[#ffd801] border-acido bg-caverna' : ''}`
                }
            >
                Inicio
            </NavLink>
            <NavLink
                to="/lo-nuevo"
                className={({ isActive }) =>
                    `bg-acido text-caverna font-bold border border-caverna hover:bg-caverna hover:text-acido hover:border-acido p-2 px-3 rounded-sm ${isActive ? 'text-[#ffd801] border-acido bg-caverna' : ''}`
                }
            >
                Lo Nuevo
            </NavLink>
            <NavLink
                to="/turismo-inclusivo"
                className={({ isActive }) =>
                    `bg-acido text-caverna font-bold border border-caverna hover:bg-caverna hover:text-acido hover:border-acido p-2 px-3 rounded-sm ${isActive ? 'text-[#ffd801] border-acido bg-caverna' : ''}`
                }
            >
                Turismo Inclusivo
            </NavLink>
            <NavLink
                to="/deporte-inclusivo"
                className={({ isActive }) =>
                    `bg-acido text-caverna font-bold border border-caverna hover:bg-caverna hover:text-acido hover:border-acido p-2 px-3 rounded-sm ${isActive ? 'text-[#ffd801] border-acido bg-caverna' : ''}`
                }
            >
                Deporte Inclusivo
            </NavLink>
            <NavLink
                to="/acceso-informacion"
                className={({ isActive }) =>
                    `bg-acido text-caverna font-bold border border-caverna hover:bg-caverna hover:text-acido hover:border-acido p-2 px-3 rounded-sm ${isActive ? 'text-[#ffd801] border-acido bg-caverna' : ''}`
                }
            >
                Acceso a la Información
            </NavLink>
            <NavLink
                to="/capacitacion"
                className={({ isActive }) =>
                    `bg-acido text-caverna font-bold border border-caverna hover:bg-caverna hover:text-acido hover:border-acido p-2 px-3 rounded-sm ${isActive ? 'text-white border-acido bg-caverna' : ''}`
                }
            >
                Capacitación
            </NavLink>
            <NavLink
                to="/donativos"
                className={({ isActive }) =>
                    `bg-acido text-caverna font-bold border border-caverna hover:bg-caverna hover:text-acido hover:border-acido p-2 px-3 rounded-sm ${isActive ? 'text-white border-acido bg-caverna' : ''}`
                }
            >
                Donativos
            </NavLink>
            <NavLink
                to="/consejo-directivo"
                className={({ isActive }) =>
                    `bg-acido text-caverna font-bold border border-caverna hover:bg-caverna hover:text-acido hover:border-acido p-2 px-3 rounded-sm ${isActive ? 'text-white border-acido bg-caverna' : ''}`
                }
            >
                Consejo Directivo
            </NavLink>
            <NavLink
                to="/actividades"
                className={({ isActive }) =>
                    `bg-acido text-caverna font-bold border border-caverna hover:bg-caverna hover:text-acido hover:border-acido p-2 px-3 rounded-sm ${isActive ? 'text-white border-acido bg-caverna' : ''}`
                }
            >
                Actividades
            </NavLink>
            <NavLink
                to="/viajes"
                className={({ isActive }) =>
                    `bg-acido text-caverna font-bold border border-caverna hover:bg-caverna hover:text-acido hover:border-acido p-2 px-3 rounded-sm ${isActive ? 'text-white border-acido bg-caverna' : ''}`
                }
            >
                Viajes
            </NavLink>
        </nav>
    );
}