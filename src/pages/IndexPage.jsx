import Header from "@/components/Header/Header";
import MainSection from "@/components/sections/MainSection";
import TariffsSection from "../components/sections/TariffsSection";
import MobileAppSection from "../components/sections/MobileAppSection";
import IPTvSection from "../components/sections/IPTvSection";
import VideoSurveillanceSection from "../components/sections/VideoSurveillanceSection";
import EventsSection from "../components/sections/EventsSection";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
    <>
      <div className="main-bg">
        <Header />
        <MainSection />
      </div>
      <TariffsSection />
      <MobileAppSection />
      <IPTvSection />
      <VideoSurveillanceSection />
      <EventsSection />
      <Footer />
    </>
  )
}

export default IndexPage;
