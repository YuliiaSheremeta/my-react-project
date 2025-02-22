import css from './Tecnology.module.css';

export default function Tecnology({title,description,tag}) {
    return (
    <div>
        <span>{tag}</span>
        <h2 >{title}</h2>
        <p>{description}</p>
  </div>
    );

};