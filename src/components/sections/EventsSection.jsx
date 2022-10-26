import PostCard from "../UI/Cards/PostCard";
import IconArrowRight from "../icons/IconArrowRight";
import IconStripes from "../icons/IconStripes";
import Fade from 'react-reveal/Fade';

const events = [
  {
    id: 1,
    date: '20 апреля 2022',
    title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
  },
  {
    id: 2,
    date: '20 апреля 2022',
    title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
  },
  {
    id: 3,
    date: '20 апреля 2022',
    title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
  },
  {
    id: 4,
    date: '20 апреля 2022',
    title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
  },
  {
    id: 5,
    type: 'LARGE',
    date: '20 апреля 2022',
    title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
  },
  {
    id: 6,
    date: '20 апреля 2022',
    title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
  },
  {
    id: 7,
    date: '20 апреля 2022',
    title: 'Изменение доп. опции «Очень много интернета» в рамках мобильной связи',
  },
]

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

        <div className="post-wrapper">
          {
            slicesEvent.map((event, idx) => (
              <div className={event.type === 'LARGE' ? 'post-card--large' : ''}>
                <Fade bottom text delay={110 * (idx + 1)} duration={1500}>
                  <PostCard key={event.id} post={event} />
                </Fade>
              </div>
            ))
          }
        </div>
        <Fade bottom text duration={2000}>
          <a className="events__more body body-5 font-color-bl flex flex-aic flex-jcfe pt-2 pb-2 pr-4 pl-4 gap-2 mt-8" href="#">
            <span>Смотреть еще</span>
            <IconArrowRight  fill="#054FD6"/>
          </a>
        </Fade>

      </div>
    </section>
  )
}

export default EventsSection;
