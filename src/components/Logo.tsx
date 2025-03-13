import { Link } from "react-router-dom";
import logo from "/inclusionconequidad.svg";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex justify-center items-center hover:text-gray-200 transition-colors"
    >
      <img src={logo} alt="Inclusión con Equidad A.C." className="h-10 md:h-16 mr-4" />
      <h1 className="text-white font-bold text-sm md:text-2xl">Inclusión con Equidad A. C.</h1>
    </Link>
  );
}