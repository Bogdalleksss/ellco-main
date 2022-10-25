import PostCard from "../UI/Cards/PostCard";

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
        <h2 className="mb-12 font-color-bl">События и акции</h2>

        <div className="post-wrapper">
          {
            slicesEvent.map(event => (
              <PostCard key={event.id} post={event} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default EventsSection;
