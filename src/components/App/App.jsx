
import article from '../Data/article.json';
import BlogCard from '../BlogCard/BlogCard';

export default function App() {
    return (
        <>
         <BlogCard
  poster={article.poster}
  tag={article.tag}
  title={article.title}
  description={article.description}
  userName={article.name}
  avatar={article.avatar}
  postedAt={article.postedAt}
/>;   
        </>
    );
};
