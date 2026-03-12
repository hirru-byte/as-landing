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
import Divider from "@/components/Divider";
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
