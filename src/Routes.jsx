import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AboutusOne = React.lazy(() => import("./pages/AboutusOne/index"));
const Homepage = React.lazy(() => import("./pages/Homepage/index"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const Contactform = React.lazy(() => import("pages/Contactform"));
const Services = React.lazy(() => import("./pages/Services/Services"));
const Training = React.lazy(() => import("./pages/Training/index"));
const Guards = React.lazy(() => import("./pages/Guards/index"));
const Infra = React.lazy(() => import("./pages/Infra/index"));
const Risk = React.lazy(() => import("./pages/Risk/index"));
const Investigation = React.lazy(() => import("./pages/Investigation/index"));
const Audits = React.lazy(() => import("./pages/Audits/index"));
const ServicesOne = React.lazy(() => import("pages/ServicesOne"));
const Aboutus = React.lazy(() => import("./pages/Aboutus/index"));
const House = React.lazy(()=>import("./pages/HouseKeepings/index"))
const Nri = React.lazy(()=>import("./pages/Nri/index"))

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Add smooth scrolling behavior
      });
    };

    scrollToTop();
  }, [pathname]);
  return null;
};
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <p style={{ margin: 'auto' }}>Loading...</p>
  </div>}>
      <Router>
          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/drones" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/guards" element={<Guards />} />
          <Route path="/investigation" element={<Investigation />} />
          <Route path="/security-audits" element={<Audits />} />
          <Route path="/infrastructure" element={<Infra />} />
          <Route path="/risk-assessment" element={<Risk />} />
          <Route path="/services" element={<ServicesOne />} />
          <Route path="/contactform" element={<Contactform />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/housekeeping" element={<House />} />
          <Route path="/nri-properties" element={<Nri />} />
          <Route path="/aboutusone" element={<AboutusOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
