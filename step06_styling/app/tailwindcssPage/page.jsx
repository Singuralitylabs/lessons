"use client";

import ProductCard from "./components/CardExamples";
import ColorTextExamples from "./components/ColorTextExamples";
import LayoutExamples from "./components/LayoutExamples";
import ResponsiveExample from "./components/ResponsiveExamples";
import SpacingExamples from "./components/SpacingExamples";

export default function TailwindCSSButtonPage() {
  // 単一の商品データサンプル
  const sampleProduct = {
    id: 1,
    name: "ワイヤレスイヤホン Pro",
    description:
      "ノイズキャンセリング機能付きの高音質ワイヤレスイヤホン。最大30時間の連続再生が可能。",
    price: 15800,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
    isNew: true,
  };

  // 複数の商品データサンプル
  const sampleProducts = [
    {
      id: 1,
      name: "ワイヤレスイヤホン Pro",
      description:
        "ノイズキャンセリング機能付きの高音質ワイヤレスイヤホン。最大30時間の連続再生が可能。",
      price: 15800,
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
      isNew: true,
      category: "オーディオ",
      rating: 4.5,
      reviewCount: 128,
    },
    {
      id: 2,
      name: "スマートウォッチ Elite",
      description: "健康管理とフィットネストラッキングに最適。防水設計で日常使いにも安心。",
      price: 28900,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      isNew: false,
      category: "ウェアラブル",
      rating: 4.2,
      reviewCount: 89,
    },
    {
      id: 3,
      name: "ゲーミングキーボード RGB",
      description: "メカニカルスイッチ搭載の本格的なゲーミングキーボード。美しいRGBライティング。",
      price: 12500,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
      isNew: true,
      category: "PC周辺機器",
      rating: 4.7,
      reviewCount: 203,
    },
    {
      id: 4,
      name: "ワイヤレス充電器",
      description: "Qi対応スマートフォンに対応した高速ワイヤレス充電パッド。",
      price: 3980,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      isNew: false,
      category: "充電器",
      rating: 4.0,
      reviewCount: 45,
    },
    {
      id: 5,
      name: "Bluetoothスピーカー",
      description: "コンパクトながらパワフルなサウンドを提供するポータブルスピーカー。",
      price: 8900,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
      isNew: false,
      category: "オーディオ",
      rating: 4.3,
      reviewCount: 156,
    },
    {
      id: 6,
      name: "モニターアーム",
      description: "デュアルモニター対応の可動式アーム。デスクスペースを有効活用。",
      price: 7800,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
      isNew: true,
      category: "PC周辺機器",
      rating: 4.6,
      reviewCount: 72,
    },
  ];

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
        <button
          className="bg-gray-500 text-white px-6 py-3 rounded"
          onClick={() => alert("Clicked!")}
        >
          Click me
        </button>
      </div>
      <LayoutExamples />
      <div className="my-16 flex justify-center">
        ----------------------------------------------------------------------
      </div>
      <SpacingExamples />
      <div className="my-16 flex justify-center">
        ----------------------------------------------------------------------
      </div>
      <ColorTextExamples />
      <div className="my-16 flex justify-center">
        ----------------------------------------------------------------------
      </div>
      <ResponsiveExample />
      <div className="my-16 flex justify-center">
        ----------------------------------------------------------------------
      </div>
      <div className="max-w-md mx-auto">
        <ProductCard product={sampleProduct} />
      </div>
    </>
  );
}
