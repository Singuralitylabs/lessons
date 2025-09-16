export default function LayoutExamples() {
  return (
    <div className="container mx-auto px-4 py-4">
      {/* フレックスボックス */}
      <div className="flex justify-between items-center">
        <div>左側のコンテンツ</div>
        <div>右側のコンテンツ</div>
      </div>

      {/* グリッドレイアウト */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4">アイテム1</div>
        <div className="bg-gray-200 p-4">アイテム2</div>
        <div className="bg-gray-300 p-4">アイテム3</div>
      </div>
    </div>
  );
}
