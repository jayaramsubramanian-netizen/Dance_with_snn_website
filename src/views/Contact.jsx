import { Helmet } from "react-helmet-async";

import { Box, Typography } from "@mui/material";
import ContactSection from "../components/Contact/ContactHeroSection";
import { FooterBottom } from "../components/FooterBottom";

export default function Contact() {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Contact Sree Narthana Natyalaya | Bharatanatyam Classes in Spring Texas
        </title>

        <meta
          name="description"
          content="Contact Sree Narthana Natyalaya in Spring, Texas for Bharatanatyam classes under Guru Shree Nandini."
        />

        <meta
          name="keywords"
          content="bharatanatyam classes spring texas, dance classes near me texas, indian classical dance texas"
        />

        <meta property="og:title" content="Contact Sree Narthana Natyalaya" />
        <meta property="og:description" content="Reach out to join Bharatanatyam classes." />
        <meta property="og:image" content="https://dancewithsnn.com/Logo.png" />
        <meta property="og:url" content="https://dancewithsnn.com/contact" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://dancewithsnn.com/contact" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "DanceSchool",
              "name": "Sree Narthana Natyalaya",
              "alternateName": "Dance With SNN",
              "url": "https://dancewithsnn.com/contact",
              "image": "https://dancewithsnn.com/Logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "27938 Robinson Park Dr",
                "addressLocality": "Spring",
                "addressRegion": "TX",
                "postalCode": "77386",
                "addressCountry": "US"
              },
              "telephone": "+16307505272",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+16307505272",
                "contactType": "customer support",
                "areaServed": "US",
                "availableLanguage": ["English", "Tamil", "Kannada"]
              },
              "sameAs": [
                "https://www.instagram.com/dancewithsnn",
                "https://www.facebook.com/dancewithsnn"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://dancewithsnn.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": "https://dancewithsnn.com/contact"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* UI */}
      <ContactSection />
      <FooterBottom />
    </>
  );
}
