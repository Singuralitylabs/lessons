import Link from "next/link";

export default async function UserPosts({ params }) {
  const { id } = await params;

  // 並行してユーザー情報と投稿を取得
  const [userResponse, postsResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`),
  ]);

  const user = await userResponse.json();
  const posts = await postsResponse.json();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{user.name}の投稿一覧</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>

      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white border rounded-lg p-4 shadow-sm w-full">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
            <Link
              href={`/posts/${post.id}`}
              className="mt-4 w-full text-center inline-block bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
            >
              詳細を見る
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
