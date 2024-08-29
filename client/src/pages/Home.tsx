import FeaturedCars from "../components/FeaturedCars";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";
import { useMe } from "../hooks/auth/useMe";

const Home = () => {
  const { user } = useMe();
  console.log(user);

  return (
    <div>
      <Hero />
      <FeaturedCars />
      <WhyUs />
      <Testimonials />
    </div>
  );
};

export default Home;
