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
      <main className="w-auto h-full bg-white text-black flex items-center justify-evenly gap-4 p-6 mt-8">
        <div className="bg-black flex flex-col w-1/2 h-auto opacity-90 p-6 rounded-2xl">
          <h1 className="text-6xl text-gray-600 text-center mr-10 sans-serif border-gray-300 border-b-2 p-2">
            Sobre nós
          </h1>
          <p className="text-2xl text-white font-semibold mt-6">
            Apaixonados por sabor, criamos hambúrgueres artesanais, saladas
            fresquinhas e doces irresistíveis para tornar cada refeição um
            momento especial
          </p>
        </div>
        <div className="bg-black flex flex-col opacity-90 w-1/2 h-20 rounded-2xl">
          <span className="mt-4 p-4 text-xl text-white leading-2">
            Temos variedades como:{" "}
            <strong className="text-amber-600">🍔 Hamburgueres</strong>,{" "}
            <strong className="text-green-500">🥗 Saladas</strong>,{" "}
            <strong className="text-white">🍰 Doces</strong>,{" "}
            <strong className="text-red-500">🥤 Bebidas</strong> e muito mais.
          </span>
        </div>
      </main>
    </>
  );
};
