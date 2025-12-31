import {
  Hero,
  TrackSplit,
  FeaturedProjects,
  AboutPreview,
  ContactSection,
} from "@/components/home";
import { ScrollProgress } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <TrackSplit />
      <FeaturedProjects />
      <AboutPreview />
      <ContactSection />
    </>
  );
}
