import Layout from "../../components/Layout.jsx";
import Hero from "../../components/Hero.jsx";
import Pricing from "../../components/Pricing.jsx";
import Services from "../../components/Services.jsx";
import Steps from "../../components/Steps.jsx";
import Testimonials from "../../components/Testimonials.jsx";

const Home = () => {
  return (
    <Layout>
      <div className="overflow-auto scrollbar-hide">
        <Hero />
        <Services />
        <Steps />
        <Testimonials />
        <Pricing />
      </div>
    </Layout>
  );
};

export default Home;
