export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl duration-300">
      {/* 画像エリア */}
      <div className="relative h-48 bg-gray-200">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            NEW
          </span>
        )}
      </div>

      {/* コンテンツエリア */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>

        {/* 価格とボタン */}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            ¥{product.price.toLocaleString()}
          </span>
          <button
            className=" bg-blue-500 
              hover:bg-blue-600 
              text-white 
              px-4 
              py-2 
              rounded-lg 
              transition-colors 
              duration-200
              focus:outline-none 
              focus:ring-2 
              focus:ring-blue-500 
              focus:ring-offset-2
            "
          >
            カートに追加
          </button>
        </div>
      </div>
    </div>
  );
}
