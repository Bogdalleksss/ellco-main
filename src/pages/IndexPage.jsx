import Header from "@/components/Header/Header";
import MainSection from "@/components/sections/MainSection";
import TariffsSection from "../components/sections/TariffsSection";
import MobileAppSection from "../components/sections/MobileAppSection";
import IPTvSection from "../components/sections/IPTvSection";
import VideoSurveillanceSection from "../components/sections/VideoSurveillanceSection";
import EventsSection from "../components/sections/EventsSection";
import Footer from "../components/Footer/Footer";
import { isMobile } from "../utils/constants";
import MainMobileSection from "../components/sections/MainMobileSection";

const IndexPage = () => {
  return (
    <>
      <div className={!isMobile ? 'main-bg' : ''}>
        <Header mode={!isMobile ? 'light' : 'default'} />
        {
          isMobile
            ? <MainMobileSection />
            : <MainSection />
        }
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
