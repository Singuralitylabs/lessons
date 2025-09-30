import Link from "next/link";

export default async function PostList() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">投稿一覧</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-3">{post.body}</p>
            <span className="text-sm text-gray-500">投稿者ID: {post.userId}</span>
            <div>
              <Link
                href={`/posts/${post.id}`}
                className="mt-4 w-full block text-center bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
