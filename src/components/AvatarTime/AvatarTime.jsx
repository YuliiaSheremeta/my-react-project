import css from './AvatarTime.module.css';
import Time from '../Time/Time'
export default function AvatarTime({avatar,userName,postedAt}) {
    return (
      <div>
        <div>
          <img src={avatar} alt="Jane Doe" />
          <Time userName={ userName} postedAt={postedAt} />
    </div>
  </div>
    );
 };