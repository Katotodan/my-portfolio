import Image from "next/image";
import Navbar from "./ui/navbar";
import Banner from "./ui/home/banner";
import About from "./ui/home/about";
import Projects from "./ui/home/projects";
import Footer from "./ui/home/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Footer />
      
    </div>
  );
}
