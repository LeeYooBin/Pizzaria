import AboutSection from "components/AboutSection";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import TrendMenu from "components/TrendMenu";

const App = () => (
  <main className="w-full">
    <Header />
    <HeroSection />
    <TrendMenu />
    <AboutSection />
    <Contact />
    <Footer />
  </main>
);

export default App;
