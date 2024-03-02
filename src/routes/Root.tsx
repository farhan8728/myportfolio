import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import GoToTop from "../components/GoToTop";
import GridLines from "react-gridlines";

const Root = () => {
  return (
    <GridLines
      className="grid-area bg-[#101010]"
      lineColor={"#252425"}
      strokeWidth={0.3}
      cellWidth={20}
    >
      <div className=" px-4 text-white xl:px-0">
        <div className="pb-20">
          <Header />
        </div>
        <Outlet />
        <GoToTop />
        <Footer />
      </div>
    </GridLines>
  );
};

export default Root;
