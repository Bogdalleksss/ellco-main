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
  return (
    <section id="events">
      <div className="container column">
        <h2 className="mb-12">События и акции</h2>

        <div className="post-wrapper">
          {
            events.map(event => (
              <PostCard post={event} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default EventsSection;
