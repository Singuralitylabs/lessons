"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-center p-4">Reactの基本</h1>
      <div className="p-4">
        <div className="mb-8">
          <Link href="/useState" className="ml-4 bg-gray-700 text-white p-2 rounded">
            useStateの解説ページへ
          </Link>
        </div>
        <div className="mb-8">
          <Link href="/useEffect" className="ml-4 bg-gray-700 text-white p-2 rounded">
            useEffectの解説ページへ
          </Link>
        </div>
        <div className="mb-8">
          <Link href="/useMemo" className="ml-4 bg-gray-700 text-white p-2 rounded">
            useMemoの解説ページへ
          </Link>
        </div>
        <div className="mb-8">
          <Link href="/useCallback" className="ml-4 bg-gray-700 text-white p-2 rounded">
            useCallbackの解説ページへ
          </Link>
        </div>
      </div>
    </div>
  );
}
