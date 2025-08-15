import "./infocontato.css";
import { Link } from "react-router";
import { motion } from "framer-motion"; 

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
      <motion.section 
        className="w-auto h-11/12 bg-black flex flex-col items-center justify-center gap-4 p-6 mt-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-4xl text-rose-900 mb-6 font-mono ">🍽️ Fale com a gente:</h3>
        <div className="bg-white rounded-2xl h-1/4 w-auto flex flex-col p-4 mt-6  items-center justify-center">
          <ul className="gap-8 list-none">
            <li className="mb-4">
              <p className="text-center text-xl text-indigo-400 font-semibold">
                ✉️ Email: placeholdercontato@gmail.com
              </p>
            </li>
            <li>
              <p className="text-center text-xl text-red-300 font-semibold">
                📞 Telefone: (99)9999-9999
              </p>
            </li>
          </ul>
        </div>
      </motion.section>
    </>
  );
};
