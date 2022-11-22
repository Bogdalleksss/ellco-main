import TitleH1 from "../../UI/TitleH1";
import { useScreen } from "../../../hooks/useScreen";

const NewsItemBannerSection = ({ title, date, banner, className }) => {
  return (
    <section id="news-item-banner" className={className}>
      <div
        className="news-item-banner container column"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 18.23%, rgba(0, 0, 0, 0.6) 100%), url(${banner})`,
          backgroundPosition: 'center'
        }}
      >
        <label className="desktop body body-8 font-color-w pr-4 pl-4 mb-6">{ date }</label>
        <TitleH1 color="#FFFFFF">{ title }</TitleH1>
      </div>
      <div className="news-item-banner mobile container column">
        <TitleH1 className="mb-4">{ title }</TitleH1>
        <label className="body body-8 font-color-w pr-4 pl-4 mb-6">{ date }</label>
      </div>
    </section>
  )
}

export default NewsItemBannerSection;
