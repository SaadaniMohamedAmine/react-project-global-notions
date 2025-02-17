import { Helmet } from "react-helmet";
import Layout from "../../components/Layout.jsx";
import Hero from "../../components/Hero.jsx";
import Pricing from "../../components/Pricing.jsx";
import Services from "../../components/Services.jsx";
import Steps from "../../components/Steps.jsx";
import Testimonials from "../../components/Testimonials.jsx";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>StreamAIServ</title>
        <link rel="icon" type="image/svg+xml" href="/icon-removebg-preview.png" />
      </Helmet>
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
