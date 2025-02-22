import css from './BlogCard.module.css';

import ImageCard from '../ImageCard/ImageCard';
import Tecnology from '../Tecnology/Tecnology';
import AvatarTime from '../AvatarTime/AvatarTime';

export default function BlogCard({ poster,tag,title,description,userName,avatar,postedAt }) {
    return (
       <div>
      <ImageCard poster={poster} />
      <Tecnology title={title} description={description}  tag={tag} />
      <AvatarTime avatar={avatar} name={userName} postedAt={postedAt} />
  </div>

)
};