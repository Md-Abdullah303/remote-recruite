import "./App.css";
import BannerSection from "./components/homepage/banner";
import CommonQuestions from "./components/homepage/CommonQuestions";
import FeeFreeSection from "./components/homepage/FeeFreeSection";
import GlobalJobBoard from "./components/homepage/globalJobBoard";
import HelpSection from "./components/homepage/HelpSection";
import PricingAndFooter from "./components/homepage/PricingAndFooter";
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
      <CommonQuestions />
      L<PricingAndFooter />
    </div>
  );
}

export default App;
