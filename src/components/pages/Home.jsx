import Banner from "../banner/Banner";
import Navbar from "../menuBar/Navbar";
import InfoBar from "../infoBar/InfoBar";
import BoxList from "../boxList/BoxList";
import Line from "../line/Line";
import ProductList from "../product/ProductList";
import Story from "../story/Story";
import Descriptions from "../descriptions/Descriptions";
import AboutUs from "../aboutUs/AboutUs";
import Subscribe from "../subscribe/Subscribe";
import MyForm from "../MyForm";
import Instagram from "../instagram/Instagram";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <InfoBar></InfoBar>
      <Navbar></Navbar>
      <Banner></Banner>
      <BoxList></BoxList>
      <ProductList></ProductList>
      <Story></Story>
      <Descriptions></Descriptions>
      <AboutUs></AboutUs>
      <Subscribe></Subscribe>
      <Instagram></Instagram>
      <Footer></Footer>
    </>
  );
};

export default Home;
