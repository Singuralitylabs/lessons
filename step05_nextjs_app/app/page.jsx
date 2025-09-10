"use client";

import { useEffect, useState } from "react";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import { UserProfile } from "./components/examples/GoodExample";

export default function Home() {
  // 1. useState、useEffectなどのフックを最初に書く
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 副作用の処理
    console.log("商品が表示されました");
  }, []);

  // 2. その後に関数やイベントハンドラを書く
  const handleDelete = () => {
    alert("削除されました");
    setShowModal(false);
  };
  const user = {
    name: "山田太郎",
    email: "mail@example.com",
  };

  // 3. return文の後に表示される内容を書く
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl m-4">トップページ</h1>
      <UserProfile user={user} />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>確認</h2>
        <p>本当に削除しますか？</p>
        <div className="m-4 flex gap-2">
          <Button type="primary" onClick={handleDelete}>
            はい
          </Button>
          <Button type="secondary" onClick={() => setShowModal(false)}>
            いいえ
          </Button>
        </div>
      </Modal>
      <Button onClick={() => setShowModal(true)}>モーダルを開く</Button>
    </div>
  );
}
