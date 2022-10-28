import { useScreen } from "../../../hooks/screen";

const NewsItemSection = ({ content, className }) => {
  const { mediaPoint } = useScreen();
  return (
    <section id="news-item-content" className={className}>
      <div className="container class news-item-content">
        <div className="column news-item-content__html" dangerouslySetInnerHTML={content} />
      </div>
    </section>
  )
}

export default NewsItemSection;
