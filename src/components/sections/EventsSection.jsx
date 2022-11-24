import PostCard from "../UI/Cards/PostCard";
import IconArrowRight from "../icons/IconArrowRight";
import IconStripes from "../icons/IconStripes";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StockCard from "../UI/Cards/StockCard";
import { useEffect, useState } from "react";

const EventsSection = () => {
  const news = useSelector(state => state.news.items);
  const promotions = useSelector(state => state.promotions.items);
  const [events, updateEvents] = useState([]);

  useEffect(() => {
    updateEvents([...news, ...promotions]);
  }, [news, promotions]);

  const sortByDate = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);

  return (
    <section id="events">
      <div className="container column">
        <Fade bottom text duration={900}>
          <h2 className="flex gap-3 font-color-bl mb-12">
            <IconStripes fill="#054FD6"/>
            <span className="flex pt-1">Новости и акции</span>
          </h2>
        </Fade>

        <div className="post-wrapper flex">
          {
            events.sort(sortByDate).map((event) => (
              <div key={event._id} className={'post-card__wrapper'}>
                <Fade bottom text delay={120} duration={900}>
                  <>
                    { event.type === 'NEWS' && <PostCard post={event} /> }
                    { event.type === 'STOCK' && <StockCard post={event} type="small" /> }
                  </>
                </Fade>
              </div>
            ))
          }
        </div>
        <Fade bottom text duration={2000}>
          <Link className="events__more body body-5 font-color-bl flex flex-aic flex-jcfe pt-2 pb-2 pr-4 pl-4 gap-2 mt-8" to="/news">
            <span>Смотреть еще</span>
            <IconArrowRight  fill="#054FD6"/>
          </Link>
        </Fade>

      </div>
    </section>
  )
}

export default EventsSection;
