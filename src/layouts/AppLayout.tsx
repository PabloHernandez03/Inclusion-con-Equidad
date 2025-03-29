import NavMenu from '@/components/NavMenu';
import Logo from "@/components/Logo";
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function AppLayout() {

  return (
    <>
      <header className="bg-caverna">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-center items-center p-2 gap-4">
          <Logo />
        </div>
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-center items-center p-2 gap-4">
          <NavMenu />
        </div>
      </header>

      <section
          className="max-w-screen-2xl mx-auto"
      >
          <Outlet />
      </section>

      <footer className="py-2 bg-caverna border-t border-caverna">
              <div className="flex flex-col flex-wrap justify-center items-center m-4 md:flex-row gap-2 md:gap-0 md:justify-center">
                <a href="https://www.facebook.com/inclusionconequidadac/" target="_blank" className="mx-2 text-white flex gap-4 items-center hover:text-acido transition-colors duration-300">
                  <FontAwesomeIcon icon={faFacebook} size="2x" /> Inclusión con equidad A. C.
                </a>
                <a href="https://www.youtube.com/channel/UCBL7NBoFff31WfRIf3IVGYg" target="_blank" className="mx-2 text-white flex gap-4 items-center hover:text-acido transition-colors duration-300">
                  <FontAwesomeIcon icon={faYoutube} size="2x" /> Inclusión con Equidad Asociación Civil
                </a>
                <a href="https://x.com/InclusionEquida" target="_blank" className="mx-2 text-white flex gap-4 items-center hover:text-acido transition-colors duration-300">
                  <FontAwesomeIcon icon={faXTwitter} size="2x" /> inclusión con equidad AC
                </a>
                <a href="https://www.instagram.com/inclusionconequidadac/" target="_blank" className="mx-2 text-white flex gap-4 items-center hover:text-acido transition-colors duration-300">
                  <FontAwesomeIcon icon={faInstagram} size="2x" /> inclusionconequidadac
      
                </a>
              </div>
              <div className="mt-4 text-center text-white mx-8 md:mx-16">
                <h2 className="text-lg font-bold">Aviso de Privacidad</h2>
                <p className="text-sm"><strong>Inclusión con Equidad Asociación Civil</strong>, mejor conocido como <strong>Inclusión con Equidad A.C.</strong>, con domicilio en <strong>Calle Contadores 34, colonia Nueva Rosita, Iztapalapa, C.P. 09420, Ciudad de México, México</strong>, y portal de internet <strong>www.inclusionconequidad.org.mx</strong>, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
                <p className="text-sm mt-4 font-bold">¿Para qué fines utilizamos sus datos personales?</p>
                <p className="text-sm">Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
                <ul className="list-disc list-inside mt-2">
              <li className="text-sm">Generar expedientes</li>
              <li className="text-sm">Generar estadísticas</li>
              <li className="text-sm">Por cuestiones de salud para atención de alguna emergencia</li>
                </ul>
                <p className="text-sm mt-4 font-bold">¿Dónde puedo consultar el aviso de privacidad integral?</p>
                <p className="text-sm">Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral descargándolo en el siguiente enlace:</p>
                <a href="https://inclusionconequidad.org.mx/Aviso_Privacidad_Integral.pdf" className="text-acido underline text-sm">AVISO DE PRIVACIDAD INTEGRAL</a>
              </div>
            </footer>
    </>
  );
}