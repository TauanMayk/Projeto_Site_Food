import { motion } from "framer-motion";
import { Link } from "react-router";
import "./headerpage.css";

export const HeaderPage = () => {
  return (
    <>
      <header className="page-header bg-zinc-950 flex justify-around items-center px-2 py-6 shadow-md text-white font-roboto list-none fixed w-full">
        <div className="text-2xl font-bold cursor-pointer text-yellow-400">
          <p className="hover:scale-125 transition duration-300">FOODies</p>
        </div>
        <motion.nav
          className="page-header-menu flex flex-col sm:flex-row gap-2 cursor-pointer text-sm md:text-lg space-x-2 font-semibold"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <li className="hover:text-yellow-400 hover:scale-125 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400 hover:scale-125 transition duration-300">
            <Link to="/sobre-nos">Sobre nós</Link>
          </li>
          <li className="hover:text-red-600 hover:scale-125 transition duration-300">
            <Link to="/menus">Menus</Link>
          </li>
          <li className="hover:text-yellow-400 hover:scale-125 transition duration-300">
            <Link to="/nos-contate">Nós Contate</Link>
          </li>
        </motion.nav>
      </header>
    </>
  );
};
