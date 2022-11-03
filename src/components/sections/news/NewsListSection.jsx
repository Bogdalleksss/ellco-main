import Fade from "react-reveal/Fade";
import PostCard from "../../UI/Cards/PostCard";
import IconStripes from "../../icons/IconStripes";
import Checkbox from "../../UI/Checkbox";

const NewsListSection = ({ news, className, children }) => {
  return (
    <section id="news-list" className={className}>
      <div className="container column">
        { children }
      </div>
      <div className="container post-wrapper gap-6">
        {
          news.map((news, idx) => (
            <div className={news.type === 'LARGE' ? 'post-card--large' : 'post-card__wrapper'}>
              <Fade bottom text delay={200 * (idx + 1)} duration={900}>
                <PostCard key={news.id} post={news} />
              </Fade>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default NewsListSection;
