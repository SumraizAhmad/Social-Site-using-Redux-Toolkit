import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import moment from "moment";
const PostsList = () => {
  const posts = useSelector((state) => state.postsss);
  const renderedPosts = posts.map((post) => {
    // console.log(post.userId);

    return (
      <article key={post.id}>
        
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p>
          <PostAuthor userId={post.userId} />
          {moment(post?.date).startOf("minute").fromNow()}

          {/* {moment(post?.date).format('hh:mm A')} */}
          {/* <TimeAgo  timestamp={post?.date} /> */}
        </p>
        {/* <p>{post.date}</p> */}
      </article>
    );
  });

  return (
    <div>
      <section>
        <h2>Posts</h2>
        {renderedPosts}
      </section>
    </div>
  );
};
export default PostsList;
