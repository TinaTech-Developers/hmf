import About from "./(main)/components/about";
import CTASection from "./(main)/components/ctasection";
import ProfessionalFooter from "./(main)/components/footer";
import HeroSlider from "./(main)/components/hero";
import ImpactSection from "./(main)/components/impactsection";
import FloatingNavbar from "./(main)/components/navbar";
import ProgramsSection from "./(main)/components/programsection";
import Testimonials from "./(main)/components/testimonials";

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <HeroSlider />
      <About />
      <ProgramsSection />
      {/* <FeaturedShowcaseSection /> */}
      <ImpactSection />
      {/* <StorySliderSection /> */}
      {/* <FeaturedProjectsSection /> */}
      {/* <FeaturedShowcaseSection /> */}
      <Testimonials />
      <CTASection />
      <ProfessionalFooter />
    </>
  );
}
