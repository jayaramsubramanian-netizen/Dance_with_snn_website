import { Helmet } from "react-helmet-async";

import HeroSection from "../components/Hero/HeroSection";
import LegacySection from "../components/Hero/LegacySection";
import { EssenceSection } from "../components/Hero/EssenceSection";
import { DividerAndCTASection } from "../components/Hero/DividerandctaSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Sree Narthana Natyalaya | Bharatanatyam Classes in Texas | Dance With SNN
        </title>

        <meta
          name="description"
          content="Sree Narthana Natyalaya offers Bharatanatyam classes in Texas under Guru Shree Nandini. Training for beginners, kids, and advanced students."
        />

        <meta
          name="keywords"
          content="bharatanatyam classes texas, indian classical dance texas, sree narthana natyalaya, dance classes near me"
        />

        <meta property="og:title" content="Sree Narthana Natyalaya | Bharatanatyam Classes in Texas" />
        <meta property="og:description" content="Professional Bharatanatyam dance training." />
        <meta property="og:image" content="https://dancewithsnn.com/Logo.png" />
        <meta property="og:url" content="https://dancewithsnn.com/" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://dancewithsnn.com/" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "DanceSchool",
              "name": "Sree Narthana Natyalaya",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "27938 Robinson Park Dr",
                "addressLocality": "Spring",
                "addressRegion": "TX",
                "postalCode": "77386",
                "addressCountry": "US"
              },
              "telephone": "+16307505272"
            }
          `}
        </script>
      </Helmet>

      {/* UI */}
      <HeroSection />
      <LegacySection />
      <EssenceSection />
      <DividerAndCTASection />
      <Footer />
    </>
  );
}
