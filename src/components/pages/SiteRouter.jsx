import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AboutPage from "./AboutPage";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";
const SiteRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <>
              <Home></Home>
            </>
          }
        ></Route>
        <Route path="about" element={<AboutPage></AboutPage>}></Route>

        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default SiteRouter;
