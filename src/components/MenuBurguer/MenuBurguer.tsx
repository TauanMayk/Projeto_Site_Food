import "./menuburguer.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Burger {
  id: number;
  name: string;
  images: [
    {
      sm: string;
      lg: string;
    }
  ];
  desc: string;
  ingredients: [
    {
      id: number;
      name: string;
      img: string;
    }
  ];
  price: number;
  veg: boolean;
}

export const MenuBurguer = () => {
  const [burgers, setDataBurger] = useState<Burger[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      for (let i = 1; i <= 1; i++) {
        try {
          const res = await fetch(`/data/burgers.json`);
          const json = await res.json();
          setDataBurger(json);
        } catch (error) {
          console.log(`deu erro nos json ai ${error}`);
        }
      }
    };
    fetchData();
  }, [burgers]);

  return (
    <>
      <motion.section className="bg-zinc-800 py-16 px-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}>
        <h3 className="text-3xl font-bold text-center text-yellow-400 mb-10">
          Nosso Cardápio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {burgers.map((burger) => (
            <div
              key={burger.id}
              className="bg-zinc-900 p-8 rounded-xl shadow-md flex flex-col gap-4 h-auto"
            >
              <img
                src={burger.images[0].sm}
                alt={burger.name}
                className="rounded-xl mb-4"
              />
              <h4 className="text-xl font-bold mb-2 text-orange-400">
                {burger.name}
              </h4>
              <p className="text-gray-400 capitalize">{burger.desc}</p>
              <span className="text-green-500 text-xl">
                RS ${burger.price}
              </span>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};
