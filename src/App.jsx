import "./App.css";
import BannerSection from "./components/homepage/banner";
import FeeFreeSection from "./components/homepage/FeeFreeSection";
import GlobalJobBoard from "./components/homepage/globalJobBoard";
import HelpSection from "./components/homepage/HelpSection";
import ShowcaseTalents from "./components/homepage/ShowcaseTalents";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <BannerSection />
      <GlobalJobBoard />
      <FeeFreeSection />
      <ShowcaseTalents />
      <HelpSection />
    </div>
  );
}

export default App;
