
import ImageEvent from '@/assets/img/event.png'

const PostCard = ({ post }) => {
  const { title, date, type } = post;

  return (
    <div className={`post-card ${type === 'LARGE' ? 'post-card--large' : ''} p-4`}>
      <img src={ImageEvent} alt=""/>
      <div className="content p-2 mt-2">
        <p className="body body-7 font-color-bl mb-2">{ date }</p>
        <p className="body body-3 font-color-bl">{ title }</p>
      </div>
    </div>
  )
}

export default PostCard;
