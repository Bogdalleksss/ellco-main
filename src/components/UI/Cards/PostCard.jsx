
import ImageEvent from '@/assets/img/event.png'
import { Link, useRouteMatch } from "react-router-dom";
import { useFormatDate } from "../../../hooks";
import { getImage } from "../../../utils";

const PostCard = ({ post }) => {
  const formatDate = useFormatDate();
  const { _id, title, annonce, createdAt, image } = post;

  return (
    <Link to={`/news/${_id}`} relative="path">
      <div className={`post-card p-4`}>
        <div className="img-wrapper">
          <div className="img" style={{backgroundImage: `url(${getImage(image)}`}} />
        </div>
        <div className="content p-2 mt-2">
          <p className="body body-7 font-color-bl mb-2">{ formatDate(createdAt) }</p>

          <p className="body body-3 font-color-bl">{ annonce }</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard;
