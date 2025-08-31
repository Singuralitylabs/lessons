"use client";

import { useState, useEffect } from "react";

/**
 * このコンポーネントは、商品情報を表示し、いいねボタンと数量入力を提供します。
 */
function ProductCard({ product }) {
  // 1. useState、useEffectなどのフックを最初に書く
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // 副作用の処理
    console.log("商品が表示されました");
  }, []);

  // 2. その後に関数やイベントハンドラを書く
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleQuantityChange = newQuantity => {
    setQuantity(newQuantity);
  };

  // 3. return文の後に表示される内容を書く
  return (
    <div className="product-card border p-4 mb-4 rounded-xl">
      <h3>{product.name}</h3>
      <p>¥{product.price.toLocaleString()}</p>
      <button onClick={handleLike}>{isLiked ? "❤️" : "🤍"}</button>
      <div className="quantity-input border mb-2 p-2">
        <input
          type="number"
          value={quantity}
          onChange={e => handleQuantityChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default ProductCard;
