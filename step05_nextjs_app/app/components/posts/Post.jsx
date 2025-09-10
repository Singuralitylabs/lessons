import { PostContent, PostFooter, PostTitle } from "./PostComponent";
import LikeButton from "../ui/LikeButton";

export function PostTemplate(post) {
  return (
    <article key={post.id}>
      <PostTitle title={post.title} />
      <PostContent content={post.excerpt} />
      <LikeButton />
      <PostFooter author={post.userId} date={new Date().toLocaleDateString()} />
      <hr className="my-4" />
    </article>
  );
}

export default PostTemplate;
