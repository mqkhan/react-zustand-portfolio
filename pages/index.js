import HeroSection from "./HeroSection";
import ThemeSwitcher from "./ThemeSwitcher";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
