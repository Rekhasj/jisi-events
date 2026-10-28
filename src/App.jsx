import "./App.css";
import NavBar from "./components/Header/NavBar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Packages from "./components/Packages/Packages";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Decoration from "./components/Decoration/Decoration";
import DecorationDetailPage from "./components/Decoration/DecorationDetailPage";
import FloatingCard from "./FloatingCard/FloatingCard";
import TermsAndConditions from "./components/QuickLinks/TermsAndConditions";
import FAQ from "./components/QuickLinks/FAQ";
import RefundCancellation from "./components/QuickLinks/RefundCancellation";
import ThingsToRemember from "./components/QuickLinks/ThingsToRemember";
import PrivacyPolicy from "./components/QuickLinks/PrivacyPolicy";
import ScrollToTop from "./components/Common/ScrollToTop";
import NotFound from "./components/Common/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <NavBar />

        <main className="flex-grow-1 bg-light">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/decoration" element={<Decoration />} />
            <Route
              path="/decoration/:item"
              element={<DecorationDetailPage />}
            />

            <Route path="/packages" element={<Packages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thingstoremember" element={<ThingsToRemember />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/refund" element={<RefundCancellation />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

        <FloatingCard
          message="Hi, I'd like to know more about JiSi Events decorations!"
          position="right"
        />
      </div>
    </Router>
  );
}

export default App;
