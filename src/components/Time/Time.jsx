import css from './Time.module.css';

export default function Time({userName,postedAt}) { 
    return (
         <div>
        <h3>{userName}</h3>
        <small>{postedAt}</small>
      </div>
    );
};