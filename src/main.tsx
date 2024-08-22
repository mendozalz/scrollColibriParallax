import { ParallaxProvider } from "react-scroll-parallax";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Nube from "./components/Nube";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import VIdeoBg from "./components/VIdeoBg";
import Menu from "./components/Menu";
import SectionExpandCards from "./components/SectionExpandCards";

export function Main() {
  return (
    <ParallaxProvider>
      <div className="main">
        <Menu/>
        <Hero />
        <Nube />
        <SectionExpandCards/>
        <Section2 />
        <Section3 />
        <Section1 />
        <Section2 />
        <VIdeoBg />
      </div>
    </ParallaxProvider>
  );
}
