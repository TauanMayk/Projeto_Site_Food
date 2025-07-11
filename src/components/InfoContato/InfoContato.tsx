import "./infocontato.css";
import { Link } from "react-router";

export const InfoContato = () => {
  return (
    <>
      <Link
        to="/"
        className="text-xl text-white mb-8 p-4 bg-gray-500 text-center rounded-2xl"
      >
        Voltar para o Começo
      </Link>
      <br />
      <div className="w-auto h-auto bg-black flex items-center justify-center gap-4 p-6 mt-8">
        <h3 className="text-2xl text-orange-500">Contato :</h3>
        <p className="text-center text-xl text-white">
          placeholdercontato@gmail.com
        </p>
      </div>
    </>
  );
};
