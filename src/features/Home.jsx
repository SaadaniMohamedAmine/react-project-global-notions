import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Pricing from "../components/Pricing.jsx";
import Services from "../components/Services.jsx"
import Steps from "../components/Steps.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx"

const Home = () => {
  return (
    <div className="overflow-auto scrollbar-hide">
      <Header />
      <Hero />
      <Services />
      <Steps />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
