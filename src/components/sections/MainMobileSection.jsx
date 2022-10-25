import MobileImage from '@/assets/img/mobile-main.png'

const labels = [
  {
    id: 1,
    type: 'fill-dark',
    color: '#2f51d2',
    title: 'Интернет',
  },
  {
    id: 2,
    type: 'fill',
    color: '#45CC63',
    title: '+tv',
  },
  {
    id: 3,
    type: 'fill',
    color: '#00004F',
    title: 'Видеонаблюдение',
  },
  {
    id: 4,
    type: 'outline',
    color: '#45CC63',
    title: 'IP',
  },
  {
    id: 5,
    type: 'outline',
    color: '#054FD6',
    title: 'Телефония',
  },
];

const cards = [
  {
    id: 1,
    title: '70 Мбит/с + 250 каналов',
    subtitle: 'Интернет + TV',
    action: 'Подключить за 750 руб./мес',
  },
  {
    id: 2,
    title: '300 руб. за 90 суток',
    subtitle: 'Интернет',
    action: 'Подключить',
  },
]

const MainCard = ({ subtitle, title, action }) => {
  return (
    <div className="main-mobile-card">
      <h5>{ subtitle }</h5>
      <p className="body body-3 mb-2 font-color-bl">{ title }</p>
      <button>{ action }</button>
    </div>
  )
}

const MainMobileSection = () => {
  const getStyle = (type, color) => {
    switch (type) {
      case 'fill': return {
          background: color,
          color: '#ffffff'
        }
      case 'fill-dark': return {
        background: color,
        color: '#ffffff'
      }
      case 'outline': return {
        color: color,
        border: `1px solid ${color}`,
      }
      default:
        break;
    }
  }

  return (
    <section id="main-mobile" className="main-mobile">
      <div className="container column">
        <img className="mt-6 mb-4" src={MobileImage} alt=""/>
        <h1 className="mb-4">Интернет безграничных возможностей в каждом уголке Дагестана</h1>
        <div className="labels flex pr-20 mb-4">
          { labels.map(label => (
            <span
              key={`label-${label.id}`}
              style={getStyle(label.type, label.color)}
              className="pt-1 pb-1 pr-2 pl-2"
            >
          { label.title }
        </span>
          )) }
        </div>

        <div className="flex main-mobile-card__wrapper gap-4 hide-scrollbar">
          {
            cards.map(card => (
              <MainCard
                key={`card-${card.id}`}
                title={card.title}
                subtitle={card.subtitle}
                action={card.action}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}


export default MainMobileSection;
