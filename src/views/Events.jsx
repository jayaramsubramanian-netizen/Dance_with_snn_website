import { Helmet } from "react-helmet-async";

import { Box, Typography } from "@mui/material";
import EventsHeroSection from "../components/Events/EventsHeroSection";
// import GallerySection from "../components/Events/GallerySection";
// import UpcomingEventsSection from "../components/Events/UpcomingEventSection";
import { Footer } from "../components/Footer";
import { FooterBottom } from "../components/FooterBottom";
import ComingSoon from "../components/ComingSoon";

export default function Events() {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Events & Performances | Sree Narthana Natyalaya | Bharatanatyam Events Texas
        </title>

        <meta
          name="description"
          content="Explore Bharatanatyam performances and cultural events by Sree Narthana Natyalaya in Texas. Stay updated with recitals and showcases."
        />

        <meta
          name="keywords"
          content="bharatanatyam events texas, indian dance performances texas, cultural events texas, dance showcases texas"
        />

        <meta property="og:title" content="Bharatanatyam Events | Sree Narthana Natyalaya Texas" />
        <meta property="og:description" content="Discover upcoming Bharatanatyam performances and events." />
        <meta property="og:image" content="https://dancewithsnn.com/Logo.png" />
        <meta property="og:url" content="https://dancewithsnn.com/events" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://dancewithsnn.com/events" />

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
                  "name": "Events",
                  "item": "https://dancewithsnn.com/events"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* UI */}
      <EventsHeroSection />
      {/* <GallerySection />
      <UpcomingEventsSection />
      <Footer /> */}
      <FooterBottom />
      {/* <ComingSoon /> */}
    </>
  );
}
