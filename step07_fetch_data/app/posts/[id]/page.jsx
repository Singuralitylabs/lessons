export default async function PostDetail({ params }) {
  const { id } = params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">投稿詳細</h1>
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ID: {post.id}</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{post.body}</p>
        <div className="text-sm text-gray-500">作成者ID: {post.userId}</div>
      </div>
    </div>
  );
}
