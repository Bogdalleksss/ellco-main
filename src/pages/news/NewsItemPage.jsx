import Header from "@/components/Header/Header";
import IconStripes from "../../components/icons/IconStripes";
import NewsItemBannerSection from "../../components/sections/news/NewsItemBannerSection";
import NewsListSection from "../../components/sections/news/NewsListSection";
import { useFormatDate, useScrollToTop } from "../../hooks";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import NewsItemSection from "../../components/sections/news/NewsItemSection";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../../utils";
import { newsFetchOne } from "../../store/news";
import draftToHtml from 'draftjs-to-html';

const NewsItemPage = () => {
  useScrollToTop()
  const dispatch = useDispatch();
  const formatDate = useFormatDate();
  const [html, updateHtml] = useState();
  const post = useSelector(state => state.news.item);
  const news = useSelector(state => state.news.items);
  const { id } = useParams()

  useEffect(() => {
    dispatch(newsFetchOne(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      const replaced = post.description.replace(/&quot;/gi, '"');
      updateHtml(draftToHtml(JSON.parse(replaced)));
    }
  }, [post]);

  return (
    <>
      <Header />
      {
        post
          && <>
              <NewsItemBannerSection
                title={post.title}
                date={formatDate(post.createdAt)}
                banner={getImage(post.image)}
              />
              <NewsItemSection content={ { __html: html }} />
            </>
      }
      <NewsListSection className="news-other" news={news.slice(0, 4)}>
        <h2 className="flex flex-aic mb-6">
          <IconStripes fill="#054FD6"/>
          <span className="mt-1 ml-3">Другие статьи</span>
        </h2>
      </NewsListSection>
      <Footer />
    </>
  )
}

export default NewsItemPage;
