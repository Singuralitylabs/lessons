import LikeButton from "../components/ui/LikeButton";
import SearchBox from "../components/ui/LikeButton";

async function PostsPage() {
  // サーバーサイドでデータフェッチ
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>
      data.slice(0, 10).map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.body.substring(0, 100) + "...",
      }))
    );

  return (
    <div>
      <h1 className="text-2xl m-4">投稿一覧</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <LikeButton />
        </article>
      ))}
    </div>
  );
}

export default PostsPage;
