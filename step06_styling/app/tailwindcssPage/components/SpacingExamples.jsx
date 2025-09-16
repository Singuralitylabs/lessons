export default function SpacingExamples() {
  return (
    <div>
      {/* パディング（内側の余白） */}
      <div className="p-4">全方向に1rem</div>
      <div className="px-6 py-3">水平6、垂直3</div>
      <div className="pt-2 pr-4 pb-6 pl-1">個別指定</div>

      {/* マージン（外側の余白） */}
      <div className="mt-8 mb-4">上8、下4</div>
      <div className="mx-auto">水平中央寄せ</div>

      {/* 子要素間のスペース */}
      <div className="space-y-4">
        <div>アイテム1</div>
        <div>アイテム2</div>
        <div>アイテム3</div>
      </div>
    </div>
  );
}
