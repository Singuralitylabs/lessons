import Link from "next/link";

export default async function UserList() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">ユーザー一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <div key={user.id} className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">{user.name}</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">ユーザー名:</span> {user.username}
              </p>
              <p>
                <span className="font-semibold">メール:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">電話:</span> {user.phone}
              </p>
              <p>
                <span className="font-semibold">会社:</span> {user.company.name}
              </p>
              <p>
                <span className="font-semibold">住所:</span> {user.address.city}
              </p>
            </div>
            <Link
              href={`/users/${user.id}`}
              className="mt-4 block bg-gray-500 text-white text-center px-4 py-2 rounded hover:bg-gray-600"
            >
              ユーザーの投稿一覧
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
