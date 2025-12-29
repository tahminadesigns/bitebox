import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedFoods from "./components/FeaturedFoods";
import PopularRestaurants from "./components/PopularRestaurants";
import WhyBiteBox from "./components/WhyBiteBox";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedFoods />
      <PopularRestaurants />
      <WhyBiteBox />
      <Testimonials />
      <Footer />
    </>
  );
}
