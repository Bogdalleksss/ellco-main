import PostCard from "../UI/Cards/PostCard";
import IconArrowRight from "../icons/IconArrowRight";
import IconStripes from "../icons/IconStripes";
import Fade from 'react-reveal/Fade';
import { events } from "../../utils/constants";
import { Link } from "react-router-dom";

const EventsSection = () => {
  const screen = window.innerWidth;
  const isTable = screen <= 1600 && screen > 480;
  const isMobile = screen <= 480;
  const slicesEvent = events.slice(0, isTable ? 4 : isMobile ? 3 : events.length);

  return (
    <section id="events">
      <div className="container column">
        <Fade bottom text duration={1500}>
          <h2 className="flex gap-3 font-color-bl mb-12">
            <IconStripes fill="#054FD6"/>
            <span className="flex pt-1">События и акции</span>
          </h2>
        </Fade>

        <div className="post-wrapper flex">
          {
            slicesEvent.map((event, idx) => (
              <div className={'post-card__wrapper'}>
                <Fade bottom text delay={110 * (idx + 1)} duration={1500}>
                  <PostCard key={event.id} post={event} />
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
