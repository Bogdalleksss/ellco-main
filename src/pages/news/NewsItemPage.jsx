import Header from "@/components/Header/Header";
import { news } from "../../utils/constants";
import IconStripes from "../../components/icons/IconStripes";
import NewsItemBannerSection from "../../components/sections/news/NewsItemBannerSection";
import NewsListSection from "../../components/sections/news/NewsListSection";
import { useScrollToTop } from "../../hooks";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import NewsItemSection from "../../components/sections/news/NewsItemSection";
import Footer from "../../components/Footer/Footer";

const NewsItemPage = () => {
  useScrollToTop()
  const [post, updatePost] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    const newsPost = news.find(item => item.id == id);
    if (newsPost) updatePost(newsPost);
  }, [post, id])

  const content = `
    <p>Виртуальная АТС (облачная телефония) позволяет принимать звонки клиентов через интернет. У этой технологии есть и несколько других полезных функций, которые делают работу отдела продаж более эффективной. В статье рассказываем, как использовать эти возможности с умом.</p>
    <h5>Чтобы не терять входящие ― разные форматы переадресации</h5>
    <p>Качественно настроенная реклама приводит постоянный поток клиентов. Но сама по себе она не всегда помогает увеличить прибыль компании. Если продукт или услуга достаточно сложные и требуют консультации специалиста, в процесс включается отдел продаж. На этом этапе важно, чтобы до менеджеров дошло максимальное количество пользователей, в идеале ― все. Но часто ресурсы бизнеса ограничены, и мгновенно ответить клиенту не получается. Тогда на помощь приходит виртуальная АТС.</p>
    <img src="https://img.youscreen.ru/wall/14977517068007/14977517068007_1920x1200.jpg" alt="image">
  `

  return (
    <>
      <Header />
      {
        post
          ? <>
              <NewsItemBannerSection title={post.title} date={post.date} banner={post.image} />
              <NewsItemSection content={ { __html: content }} />
            </>
          : <></>
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
