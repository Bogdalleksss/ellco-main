import Fade from "react-reveal/Fade";
import PostCard from "../../UI/Cards/PostCard";
import StockCard from "../../UI/Cards/StockCard";
import { useScreen } from "../../../hooks/useScreen";

const NewsListSection = ({ news, className, children }) => {
  const { mediaPoint } = useScreen();

  const nth = () => {
    switch (mediaPoint) {
      case 1600: return 7
      default: return 3
    }
  }

  const fullCardClass = (idx) => {
    const className = 'full-card'
    if (mediaPoint === 1600) {
      if ((idx + 1) % nth() === 0) return `${className} full-card--end`;
      if ((idx + 1) % (nth() + 1) === 0) return `${className} full-card--start`;
    }
    if (mediaPoint <= 480) return ''
    return (idx + 1) % nth() === 0 ? `${ className } full-card--start` : '';
  }

  return (
    <section id="news-list" className={className}>
      <div className="container column">
        { children }
      </div>
      <div className="container post-wrapper gap-6">
        {
          news.map((news, idx) => (
            <div key={news._id} className={`post-card__wrapper ${ fullCardClass(idx) }`}>
              <Fade
                bottom
                text
                duration={900}
                className="flex"
              >
                <>
                  { news.type === 'NEWS' && <PostCard post={news} /> }
                  { news.type === 'STOCK' && <StockCard type={ fullCardClass(idx) ? 'medium' : 'small'} post={news} /> }
                </>
              </Fade>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default NewsListSection;
