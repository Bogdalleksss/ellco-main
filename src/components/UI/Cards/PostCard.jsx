
import ImageEvent from '@/assets/img/event.png'
import { Link, useRouteMatch } from "react-router-dom";

const PostCard = ({ post }) => {
  const { id, title, date, image } = post;

  return (
    <Link to={`/news/post/${id}`} relative="path">
      <div className={`post-card p-4`}>
        <div className="img-wrapper">
          <div className="img" style={{backgroundImage: `url(${image || ImageEvent})`}} />
        </div>
        <div className="content p-2 mt-2">
          <p className="body body-7 font-color-bl mb-2">{ date }</p>
          <p className="body body-3 font-color-bl">{ title }</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard;
