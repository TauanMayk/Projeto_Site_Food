import "./mainpage.css";
import { HeaderPage } from "../HeaderPage/HeaderPage";
import { MenuBurguer } from "../MenuBurguer/MenuBurguer";
import { FoodMenu } from "../FoodMenu/FoodMenu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const MainPage = () => {
  const [abrirMenuBurguer, setAbrirMenuBurguer] = useState(false);
  const [abrirMenuFoods, setAbrirMenuFoods] = useState(false);

  return (
    <>
      <HeaderPage />
      <main className="bg-zinc-900 text-white font-roboto flex max-[970px]:flex-col items-center justify-center px-30 py-24 gap-10 h-full w-auto">
        <div className="page-content max-w-xl text-left font-sans max-[970px]:max-w-2xl max-[970px]:text-center">
          <small className="text-sm font-semibold leading-tight">FOODies</small>
          <h2 className="text-6xl font-extrabold mb-6 leading-tight text-left">
            Delicioso e Gostoso
          </h2>
          <p className="text-lg text-zinc-400 mb-6">
            Veja nosso Menu de Cardapios de Hamburgueres e Comidas Tipicas
          </p>
          <div className="flex gap-4 ">
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
          </div>
        </div>
        <div className="Hamburguer-Logo w-6xl max-[970px]:w-2xl">
          <img
            srcSet="./public/images/02-25.png"
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
    </>
  );
};
