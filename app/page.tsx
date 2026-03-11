import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScholarshipValue from "@/components/ScholarshipValue";
import ProgramIntro from "@/components/ProgramIntro";
import Roadmap from "@/components/Roadmap";
import TeachersSection from "@/components/TeachersSection";
import EnglishSupport from "@/components/EnglishSupport";
import WhyPrepareEarly from "@/components/WhyPrepareEarly";
import CTABanner from "@/components/CTABanner";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ScholarshipValue />
        <ProgramIntro />
        <Roadmap />
        <TeachersSection />
        <EnglishSupport />
        <WhyPrepareEarly />
        <CTABanner />
        <RegisterSection />
        <Footer />
      </main>
    </>
  );
}
