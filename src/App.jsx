import "./App.css";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import MemeCoin from "./components/MemeCoin/MemeCoin";
import { Navbar } from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import Tokenomics31 from "./components/Tokenomic/Tokenomics";
import { createRoot } from "react-dom/client";

import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import CatInAction from "./components/CatInAction/CatInAction";

function App() {
  return (
    <>
      <div className="sm:w-full w-fit">
        <div className=" pt-4 sticky -top-4 z-40 sm:w-[60%] sm:m-auto ml-3.5">
          <Navbar />
        </div>

        <div className="pt-4 sm:w-[50%] w-full m-auto">
          <WelcomeCard />
        </div>
        <div className="m-auto mt-60 w-full">
          <MemeCoin />
        </div>

        <div id="CatAction" className="m-auto mt-4 w-full">
          <CatInAction />
        </div>

        <div id="roadmap" className="m-auto w-[60%]">
          <Roadmap />
        </div>

        <div id="HowToBuy" className="sm:w-[60%] w-full m-auto">
          <HowToBuy />
        </div>

        <div id="Tokenomics" className="w-full m-auto">
          <h2 className="text-4xl font-bold mb-4 text-white text-center">
            Tokenomic
          </h2>
          <Tokenomics31 />
        </div>

        <div className="mt-80">
          <Footer />
        </div>

        {/**/}
        {/*
     
    

      

    

      <div id="gallery" className="mt-12 pt-36 m-auto w-[60%]">
        <Gallery />
      </div>

       */}
      </div>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
