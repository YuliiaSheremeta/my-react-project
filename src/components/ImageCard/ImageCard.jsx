import css from './ImageCard.module.css';

export default function ImageCard({poster}) {
    return (
        <div>
        <img
      src={poster}
      alt="card-image" />
        </div>
    );
 };