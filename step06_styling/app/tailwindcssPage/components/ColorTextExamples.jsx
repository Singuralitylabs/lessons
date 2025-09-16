export default function ColorTextExamples() {
  return (
    <div>
      {/* 背景色とテキスト色 */}
      <div className="bg-blue-500 text-white p-4">青い背景に白いテキスト</div>

      {/* テキストサイズとウェイト */}
      <h1 className="text-3xl font-bold text-gray-900">大きな見出し</h1>
      <p className="text-base font-normal text-gray-600">通常のテキスト</p>
      <small className="text-sm text-gray-400">小さなテキスト</small>

      {/* ボーダー */}
      <div className="border border-gray-300 rounded-lg p-4">角丸のボーダー</div>
    </div>
  );
}
