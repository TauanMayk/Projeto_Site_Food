import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MenuBurguer } from "../../Menus/MenuBurguer/MenuBurguer";
import { FoodMenu } from "../../Menus/FoodMenu/FoodMenu";
import { MenuGroceries } from "../../Menus/MenuGroceries/MenuGroceries";
import { Link } from "react-router";
import "./menupage.css";

export const MenuPage = () => {
  const [abrirMenuBurguer, setAbrirMenuBurguer] = useState(false);
  const [abrirMenuFoods, setAbrirMenuFoods] = useState(false);
  const [abrirMenuGroceries, setAbrirMenuGroceries] = useState(false);

  return (
    <>
      <Link
        to="/"
        className="text-xl text-white mb-8 p-4 bg-gray-500 text-center rounded-2xl"
      >
        Voltar para o Começo
      </Link>
      <br />
      <div className="flex gap-4 min-w-2xl max-[970px]:justify-center items-center max-[580px]:w-auto m-12">
        <button
          className="bg-yellow-400 text-zinc-900 font-bold px-8 py-3 rounded-full hover:bg-red-600 hover:text-white cursor-pointer transition duration-500"
          onClick={() => setAbrirMenuBurguer(!abrirMenuBurguer)}
        >
          <p>Menu Hamburgueres</p>
        </button>
        <button
          className="bg-yellow-400 text-zinc-900 font-bold px-8 py-3 rounded-full hover:bg-red-600 hover:text-white cursor-pointer transition duration-500"
          onClick={() => setAbrirMenuFoods(!abrirMenuFoods)}
        >
          <p>Menu Comidas</p>
        </button>
        <button
          className="bg-yellow-400 text-zinc-900 font-bold px-8 py-3 rounded-full hover:bg-red-600 hover:text-white cursor-pointer transition duration-500"
          onClick={() => setAbrirMenuGroceries(!abrirMenuGroceries)}
        >
          <p>Menu Doces</p>
        </button>
      </div>
      <AnimatePresence>
        {abrirMenuBurguer && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <MenuBurguer />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {abrirMenuFoods && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <FoodMenu />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {abrirMenuGroceries && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <MenuGroceries />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
