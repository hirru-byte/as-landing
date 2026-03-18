import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RegisterSection from "@/components/RegisterSection";
import Roadmap from "@/components/Roadmap";
import WhyPrepareEarly from "@/components/WhyPrepareEarly";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="inset-0 z-0 fixed top-0">
        <Image src="/bg-main.webp" alt="Background Pattern" fill objectFit="cover" objectPosition="center" />
      </div>
      <main className="relative z-10">
        <Hero />
        {/* <ScholarshipValue /> */}
        {/* <ProgramIntro /> */}

        <Roadmap />

        {/* <EnglishSupport /> */}
        <WhyPrepareEarly />
        {/* <TeachersSection /> */}
        <CTABanner />
        <RegisterSection />
        <Footer />
      </main>
    </div>
  );
}
