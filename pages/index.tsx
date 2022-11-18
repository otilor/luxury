import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Testimonials from "../components/testimonials";
import HousesList from "../components/HousesList";


export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      {/* Section for houses */}
      <HousesList />
    </div>
  )
}
