import Link from "next/link";

export default async function BlogDetail({ params }) {
  const { id } = await params;
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl m-4">ブログ記事{id}</h1>
      <p>ブログ記事の詳細内容</p>
      <nav className="nav m-4">
        <Link href="/blog" className="ml-4 bg-gray-700 text-white p-2 rounded m-4">
          ブログ一覧へ
        </Link>
      </nav>
    </main>
  );
}
