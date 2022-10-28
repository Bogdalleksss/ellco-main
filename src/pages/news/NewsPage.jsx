import Header from "@/components/Header/Header";
import { events, news } from "../../utils/constants";
import NewsListSection from "../../components/sections/news/NewsListSection";
import NewsBannerSection from "../../components/sections/news/NewsBannerSection";
import { useScreen } from "../../hooks/screen";
import IconStripes from "../../components/icons/IconStripes";
import Checkbox from "../../components/UI/Checkbox";
import { useScrollToTop } from "../../hooks";
import Footer from "../../components/Footer/Footer";

const NewsPage = () => {
  const { mediaPoint } = useScreen();

  useScrollToTop();

  const newsSlice = news.slice(
    0,
    mediaPoint < 1600 && mediaPoint >= 1024
      ? 5
      : mediaPoint <= 481
        ? 3
        : news.length
    )
  return (
    <>
      <Header />
      <NewsListSection news={newsSlice} >
        <h2 className="flex flex-aic mb-6">
          <IconStripes fill="#054FD6"/>
          <span className="mt-1 ml-3">Новости и акции</span>
        </h2>
        <div className="filters flex flex-aic gap-6 mb-8">
          <Checkbox id="news">Новости</Checkbox>
          <Checkbox id="discount">Акции</Checkbox>
        </div>
      </NewsListSection>
      <NewsBannerSection />
      <NewsListSection className="news-other" news={news.slice(0, mediaPoint > 1600 ? 4 : 2)} />
      <Footer/>
    </>
  )
}

export default NewsPage;
