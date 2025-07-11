import "./aboutpage.css";
import { Link } from "react-router";

export const AboutPage = () => {
  return (
    <>
      <Link
        to="/"
        className="text-xl text-white mb-8 p-4 bg-gray-500 text-center rounded-2xl"
      >
        Voltar para o Começo
      </Link>
      <br />
      <div className="w-auto h-auto bg-white text-black flex flex-col items-center justify-center gap-4 p-6 mt-8">
        <h1 className="text-2xl">Sobre nós</h1>
        <p className="text-xl text-green-500 font-semibold mt-6">
          Nós fazemos Comidas deliciosas e gostosas e esperamos que os clientes
          estejam satisfeito com a nossa Comida.
        </p>
        <span className="mt-2 p-4 text-xl">
          Temos variedades como: <strong>Hamburgueres</strong>,{" "}
          <strong>Saladas</strong>, <strong>Doces</strong>,{" "}
          <strong>Bebidas</strong> e muito mais.
        </span>
      </div>
    </>
  );
};
