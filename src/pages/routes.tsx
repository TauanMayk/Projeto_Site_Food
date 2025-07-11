import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../components/MainPage/MainPage";
import { InfoContato } from "../components/InfoContato/InfoContato";
import { MenuPage } from "../Menus/MenuPage/MenuPage";
import { AboutPage } from "../components/AboutPage/AboutPage";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/nos-contate" element={<InfoContato />} />
          <Route path="/menus" element={<MenuPage />} />
          <Route path="/sobre-nos" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
