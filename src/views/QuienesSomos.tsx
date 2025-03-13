import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPersonWalkingWithCane, faHandshakeSimple, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";

export default function QuienesSomos() {

    return (
      <>
        <div>
          <div className="md:flex">
            <div className="m-4 text-caverna p-2 md:p-8 md:w-1/2 md:flex md:flex-col md:justify-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold md:mb-4">¿Quiénes Somos?</h1>
            </div>
            <div className="m-4 text-caverna p-2 md:p-10 md:w-1/2 md:flex md:flex-col md:justify-center">
              <p className="mb-4">
                Somos una <strong>Asociación Civil legalmente constituida por jóvenes ciegos profesionistas</strong>, que coadyuva a promover los derechos de <strong>las PERSONAS CON DISCAPACIDAD</strong>.
              </p>
              <p className="mb-4">
                Surgió, en el año <strong>2015</strong>, como una necesidad de sus fundadores, que buscaban <strong>brindar un espacio de participación</strong>, más allá de lo que otras asociaciones civiles realizaban comúnmente.
              </p>
            </div>
            {/* <div className="m-4 text-caverna border shadow-xl">
              <img src="/img/img (1).jpg" alt="Hombre sosteniendo celular en frente de los ojos a modo de lentes, en el celular hay una imagen de unos ojos con nubosidad haciendo parecer que son los ojos del hombre, al fondo se observa el cartel con los símbolos de discapacidad" className="w-full h-96 object-cover" />
            </div> */}
          </div>
          <div className="md:flex bg-caverna">
            <div className="text-white p-6 md:p-10 md:w-1/2 flex flex-col justify-center hover:bg-[#2e3537] transform transition-transform duration-500 hover:scale-105">
              <h2 className="text-acido text-3xl font-bold mb-2 text-center">Misión</h2>
              <p>
                <strong className="text-acido">Promover los derechos de las personas con discapacidad visual, física, auditiva e intelectual</strong>, incidiendo con <strong className="text-acido">proyectos</strong> transversales que <strong className="text-acido">fomenten</strong> la <strong className="text-acido">igualdad</strong> y <strong className="text-acido">no discriminación</strong>, el derecho a la <strong className="text-acido">vida independiente</strong>, la <strong className="text-acido">igualdad de género</strong>, el <strong className="text-acido">acceso a la información</strong>, el derecho a la <strong className="text-acido">educación</strong>, a un <strong className="text-acido">empleo digno</strong> y la participación en la <strong className="text-acido">vida cultural</strong> y al <strong className="text-acido">ocio</strong>.
              </p>
            </div>
            <div className="text-white p-6 md:p-10 md:w-1/2 flex flex-col justify-center hover:bg-[#2e3537] transform transition-transform duration-500 hover:scale-105">
              <h2 className="text-acido text-3xl font-bold mb-2 text-center">Visión</h2>
              <p>
                Procurando la sostenibilidad, mantenernos como un <strong className="text-acido">referente y firme promotor de los derechos y principios enmarcados en la Convención Sobre los Derechos de las Personas con Discapacidad</strong>, abriendo espacios donde se visibilice la <strong className="text-acido">presencia</strong> y <strong className="text-acido">participación</strong>, en los ámbitos turísticos, laborales, de capacitación y educativos de personas con discapacidad.
              </p>
            </div>
          </div>
          <div className=" text-caverna py-4 px-10 w-full">
            <h2 className="text-center text-4xl font-bold mt-6 mb-6">Valores institucionales</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center bg-acido text-caverna p-4 rounded-lg transform transition-transform duration-500 hover:scale-105">
              <strong className="flex justify-center">Responsabilidad institucional</strong>
              <p> Es la firmeza de mantener el compromiso de nuestra misión asumiendo el cumplimiento de nuestro objeto social.</p>
              <FontAwesomeIcon icon={faHeart} size="4x" className="text-caverna pt-4 transform transition-transform duration-500 hover:scale-125" /> 
              </div>
              <div className="text-center bg-acido text-caverna p-4 rounded-lg transform transition-transform duration-500 hover:scale-105">
              <strong className="flex justify-center">Solidaridad institucional</strong> 
              <p>Llevar a cabo acciones orientadas para apoyar las causas encaminadas a mejorar la calidad de vida de las personas con alguna discapacidad.</p>
              <FontAwesomeIcon icon={faPersonWalkingWithCane} size="4x" className="text-caverna pt-4 transform transition-transform duration-500 hover:scale-125" /> 
              </div>
              <div className="text-center bg-acido text-caverna p-4 rounded-lg transform transition-transform duration-500 hover:scale-105">
              <strong className="flex justify-center">Empatía institucional</strong>
              <p>Es la habilidad de entender la necesidad de nuestros socios desde su propia condición manteniendo una aptitud de acompañamiento.</p>
              <FontAwesomeIcon icon={faHandshakeSimple} size="4x" className="text-caverna pt-4 transform transition-transform duration-500 hover:scale-125" /> 
              </div>
              <div className="text-center bg-acido text-caverna p-4 rounded-lg transform transition-transform duration-500 hover:scale-105">
              <strong className="flex justify-center">Equidad Institucional</strong>
              <p>Tener la sensibilidad de ofrecer nuestros servicios a nuestros socios de acuerdo con sus necesidades específicas.</p>
              <FontAwesomeIcon icon={faScaleBalanced} size="4x" className="text-caverna pt-4 transform transition-transform duration-500 hover:scale-125" /> 
              </div>
            </div>
          </div>
          <div className="text-caverna py-4 px-10 w-full">
            <h2 className="text-center text-4xl font-bold mt-6 mb-6">Objeto Social</h2>
            <p className="text-center mb-4 bg-caverna text-acido p-8 pt-6 px-6 md:px-20 rounded-lg">
            <strong className="text-xl">Capacitación</strong>
            <br/>
            <strong>Inclusión con Equidad A.C.</strong> brinda capacitación en materia de: <strong>Acceso a la información, educación, turismo inclusivo y derechos de las personas con discapacidad</strong> enfocada a empresas, instituciones y personas interesadas en la inclusión social, económica, laboral cultural y recreativa de las personas con alguna discapacidad.
            </p>
            <div className="grid md:grid-cols-2 gap-1 md:gap-4">
            <p className="text-center mb-4 bg-caverna text-acido p-8 pt-6 rounded-lg">
            <strong className="text-xl">Servicios</strong>
            <br/>
              Brinda servicios para la atención a grupos sociales con discapacidad, a través de la orientación social, educación y capacitación a personas con discapacidad.
            </p>
            <p className="text-center mb-4 bg-caverna text-acido p-8 pt-6 rounded-lg">
            <strong className="text-xl">Asesoramiento</strong>
            <br/>
              También, atiende a través de asesorías de orientación y trabajo social y educativo para la niñez y la juventud con discapacidad.
            </p>
            <p className="text-center mb-4 bg-caverna text-acido p-8 pt-6 rounded-lg">
            <strong className="text-xl">Eduación</strong>
            <br/>
              Del mismo modo brinda atención educativa, para personas adultas con discapacidad pertenecientes a grupos vulnerables.
            </p>
            <p className="text-center mb-4 bg-caverna text-acido p-8 pt-6 rounded-lg">
            <strong className="text-xl">Compromiso</strong>
            <br/>
              Inclusión con Equidad A.C. en los proyectos que desarrolla, cuida de llevarlos a cabo bajo la promoción de la equidad de género y promoción y defensa de los derechos humanos.
            </p>
            </div>
          </div>
        </div>
      </>
    );      
}