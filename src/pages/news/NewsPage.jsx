import Header from "@/components/Header/Header";
import { news } from "../../utils/constants";
import NewsListSection from "../../components/sections/news/NewsListSection";
import IconStripes from "../../components/icons/IconStripes";
import Checkbox from "../../components/UI/Checkbox";
import { useScrollToTop } from "../../hooks";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const NewsPage = () => {
  useScrollToTop();
  const [posts, updatePosts] = useState([]);
  const [showNews, updateShowNews] = useState(false);
  const [showPromotions, updateShowPromotions] = useState(false);

  const news = useSelector(state => state.news.items);
  const promotions = useSelector(state => state.promotions.items);

  useEffect(() => {
    updatePosts(getPosts());
  }, [showNews, showPromotions, news, promotions]);

  const getPosts = () => {
    const isNotAll = !showNews && !showPromotions;


    if (showNews && showPromotions || isNotAll) return [...news, ...promotions];
    if (showNews) return news;
    if (showPromotions) return promotions;
  }

  const sortByDate = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);

  return (
    <>
      <Header />
      <NewsListSection news={posts.sort(sortByDate)} >
        <h2 className="flex flex-aic mb-6">
          <IconStripes fill="#054FD6"/>
          <span className="mt-1 ml-3">Новости и акции</span>
        </h2>
        <div className="filters flex flex-aic gap-6 mb-8">
          <Checkbox
            id="news"
            value={showNews}
            onChange={val => updateShowNews(val)}
          >
            Новости
          </Checkbox>
          <Checkbox
            id="discount"
            value={showPromotions}
            onChange={val => updateShowPromotions(val)}
          >
            Акции
          </Checkbox>
        </div>
      </NewsListSection>
      <Footer/>
    </>
  )
}

export default NewsPage;
