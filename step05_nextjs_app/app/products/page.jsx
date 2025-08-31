"use client";
import ProductCard from "../components/products/ProductCard";
import Button from "../components/ui/Button";

export default function Products() {
  const products = [
    { id: 1, name: "ノートPC", price: 120000 },
    { id: 2, name: "スマートフォン", price: 80000 },
    { id: 3, name: "タブレット", price: 60000 },
  ];

  const handleSubmit = () => {
    alert("購入されました");
  };
  const handleCancel = () => {
    alert("キャンセルされました");
  };

  return (
    <div>
      <h1 className="text-2xl m-4">商品ページ</h1>
      <div className="flex gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-end gap-4 m-4">
        <Button type="primary" onClick={handleSubmit}>
          購入
        </Button>
        <Button type="secondary" onClick={handleCancel}>
          キャンセル
        </Button>
      </div>
    </div>
  );
}
