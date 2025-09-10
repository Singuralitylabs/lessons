import PostTemplate from "../components/posts/Post";
import LikeButton from "../components/ui/LikeButton";

async function PostsPage() {
  // サーバーサイドでデータフェッチ
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>
      data.slice(0, 10).map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.body.substring(0, 100) + "...",
        userId: post.userId,
      }))
    );

  return (
    <div>
      <h1 className="text-2xl m-4">投稿一覧</h1>
      {posts.map(post => (
        <PostTemplate key={post.id} {...post} />
      ))}
    </div>
  );
}

export default PostsPage;
