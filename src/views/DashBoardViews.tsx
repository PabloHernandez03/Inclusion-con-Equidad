import QuienesSomos from '@/views/QuienesSomos';
import React from 'react';

export default function DashBoardView() {
  const [showMore, setShowMore] = React.useState<boolean>(true);

  return (
    <>
      {/* Quienes somos */}
      <QuienesSomos />
      {/* Video de Youtube y Noticia sobre el Tifloencuentro */}
      <div className="flex flex-wrap justify-center m-4 rounded-3xl">
        <div className="w-full md:w-1/2">
          <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/oFkyDpoz9YU?controls=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 p-2 flex items-center bg-caverna  justify-center">
          <div className="text-center text-2xl text-acido font-bold">
            <p>
              Inclusión con Equidad A.C.
            </p>
            <p>
              "A favor de las personas con discapacidad"
            </p>
          </div>
        </div>
        
      </div>
      <div className="w-full my-4 pt-10 bg-caverna text-white">
          <div className="text-center text-2xl text-acido font-bold mb-4">
          <h3>
              ¡Inclusión con Equidad A.C. fue el anfitrión seleccionado para el IX Tifloencuentro Riviera Maya 2019!
          </h3>
          </div>
          <div className="mt-4">
            {showMore === true && (
              <div className="px-10">
              <p>
              México fue, <strong>por segunda vez</strong>, el lugar elegido para la <strong>Novena Edición del Encuentro Internacional</strong> que reúne a decenas de usuarios de la Biblioteca Tiflolibros. Tiflonexos Asoc Civil y Biblioteca Tiflolibros, en alianza con Inclusión con Equidad AC y Cancún Accesible, fueron los anfitriones de este evento.
              </p>
              <br/>
              <p>
                <strong>Antecedentes</strong>
                <br/>
                Hacia 2004, cuando Tiflolibros ya se había convertido en un espacio de encuentro e intercambio virtual de cientos de personas con discapacidad visual, surgió la idea de organizar un encuentro que cumpliera dos objetivos: <strong>conocerse y hacer turismo accesible</strong>. El primer Tifloencuentro fue en la Ciudad de Buenos Aires. Al ser un éxito, la experiencia empezó a repetirse cada dos años en distintos puntos de la Argentina y con la participación de personas que venían desde distintos puntos del mundo.
              </p>
              <br/>
              <p>
              <strong>¿Cómo funcionan los Tifloencuentros?</strong>
              <br/>
              El objetivo del evento es el de ofrecer un viaje de turismo, cultura, encuentro y amistad, junto a personas con discapacidad visual de diferentes partes del mundo
                Sede 2019
              </p>
              <br/>
              <p>
                Fue en la <strong>Riviera Maya, en México</strong>. La base fue en el Hotel Fiesta Inn, en la Ciudad de Playa del Carmen, y desde allí se conocieron diferentes atractivos de la región, como Cancún, la Isla de Cozumel, Chichen Itzá y las playas del Caribe mexicano.
                Los 75 participantes (<strong>48 con discapacidad visual</strong>), fueron originarios de 9 países como: Argentina, Chile, Guatemala, Perú, Uruguay, España, Paraguay, México y Alemania.
              </p>
            </div>  
            )}
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="p-4 text-acido hover:bg-[#2e3537] w-full flex justify-center"
                    >
                    {showMore === true ? (
                        <div className="animate-bounce">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                        />
                        </svg>
                        </div>
                    ) : (
                        <div className="animate-bounce">
                          <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                          >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                          </svg>
                        </div>
                    )}
                </button>
            </div>
        </div>
    </>
  );
}