import "./mainpage.css";
import { HeaderPage } from "../HeaderPage/HeaderPage";
import { MenuBurguer } from "../../Menus/MenuBurguer/MenuBurguer";
import { FoodMenu } from "../../Menus/FoodMenu/FoodMenu";
import { MenuGroceries } from "../../Menus/MenuGroceries/MenuGroceries";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const MainPage = () => {
  const [abrirMenuBurguer, setAbrirMenuBurguer] = useState(false);
  const [abrirMenuFoods, setAbrirMenuFoods] = useState(false);
  const [abrirMenuGroceries, setAbrirMenuGroceries] = useState(false);

  return (
    <>
      <HeaderPage />
      <main className="bg-zinc-900 text-white font-roboto flex max-[970px]:flex-col lg:flex-row items-center justify-center px-6 lg:px-24 py-24 gap-12 m-h-screen w-full">
        <div className="max-w-xl text-center lg:text-left mt-26">
          <small className="text-xl font-semibold leading-tight text-yellow-400">
            FOODies
          </small>
          <h2 className="text-4xl font-extrabold mb-6 leading-tight text-left max-[900px]:text-center">
            Delicioso e Gostoso
          </h2>
          <p className="text-lg text-zinc-400 mb-6">
            Veja nosso Menu de Cardapios de Hamburgueres e Comidas Tipicas
          </p>
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-zinc-900 font-bold px-6 py-3 rounded-full hover:bg-red-600 hover:text-white cursor-pointer transition duration-500"
              onClick={() => setAbrirMenuBurguer(!abrirMenuBurguer)}
            >
              <p>Menu Hamburgueres</p>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-zinc-900 font-bold px-8 py-3 rounded-full hover:bg-red-600 hover:text-white cursor-pointer transition duration-500"
              onClick={() => setAbrirMenuFoods(!abrirMenuFoods)}
            >
              <p>Menu Comidas</p>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-zinc-900 font-bold px-8 py-3 rounded-full hover:bg-red-600 hover:text-white cursor-pointer transition duration-500"
              onClick={() => setAbrirMenuGroceries(!abrirMenuGroceries)}
            >
              <p>Menu Doces</p>
            </motion.button>
          </motion.div>
        </div>
        <div className="Hamburguer-Logo w-6xl max-[970px]:w-2xl max-[580px]:w-auto">
          <img
            srcSet="/images/02-25.png"
            alt="Foto Hambuger"
            className="w-auto h-auto object-cover"
          />
        </div>
      </main>
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
