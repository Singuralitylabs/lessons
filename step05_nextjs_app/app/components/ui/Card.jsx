// カードコンポーネント（子要素を受け取る）

/**
 * このCardコンポーネントは、再利用可能なカードUIを提供します。
 */
function Card({ children, title }) {
  return (
    <div className="border rounded-lg p-4 shadow">
      {title && <h3 className="font-bold mb-2">{title}</h3>}
      <div>
        {children} {/* ここに子要素が入る */}
      </div>
    </div>
  );
}

export default Card;
