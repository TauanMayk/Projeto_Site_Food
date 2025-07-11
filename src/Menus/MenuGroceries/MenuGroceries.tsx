import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Groceries } from "../../models/GroceriesModel";
import "./menugroceries.css";

export const MenuGroceries = () => {
  const [groceriesData, setGroceriesData] = useState<Groceries[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/data/doces.json`);
        const json = await res.json();
        setGroceriesData(json);
      } catch (error) {
        console.log(`deu erro nos json ai ${error}`);
      }
    };
    fetchData();
  }, [groceriesData]);

  if (!groceriesData) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <motion.section
        className="bg-zinc-800 py-16 px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-3xl font-bold text-center text-yellow-400 mb-10">
          Menu de Doces
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {groceriesData.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 p-8 rounded-xl shadow-md flex flex-col gap-4 h-auto mb-6"
            >
              <img src={item.img} alt={item.name} className="rounded-xl mb-4" />
              <h4 className="text-xl font-bold mb-2 text-orange-400">
                {item.name}
              </h4>
              <p className="text-gray-400 capitalize">{item.description}</p>
              <span className="text-green-500 text-xl">R$ {item.price}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};
