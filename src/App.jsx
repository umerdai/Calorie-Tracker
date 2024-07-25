// Importing components
import Navbar from "./components/Navbar/Navbar";
import ProgressCard from "./components/ProgressCard";
import Partners from "./components/Partners";
import SocialProof from "./components/SocialProof";
import PackagesOffered from "./components/PackagesOffered";
import FAQs from "./components/FAQs";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useRef } from "react";

function App() {
  const contactRef = useRef(null);
  const serviceRef = useRef(null);
  const reviewRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToService = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToReviews = () => {
    if (reviewRef.current) {
      reviewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Navbar
        scrollToContact={scrollToContact}
        scrollToService={scrollToService}
        scrollToReviews={scrollToReviews}
      />
      <Content />
      <div ref={serviceRef}>
        <ProgressCard />
      </div>
      <Partners />
      <div ref={reviewRef}>
        <SocialProof />
      </div>
      <PackagesOffered />
      <FAQs />
      <div ref={contactRef}>
        <Contactus />
      </div>
      <Footer />
    </div>
  );
}

export default App;
