/**
 * このButtonコンポーネントは、再利用可能でカスタマイズ可能なボタンを提供します。
 */
function Button({ children, type = "primary", onClick }) {
  const className =
    type === "primary"
      ? "bg-blue-500 text-white px-4 py-2 rounded"
      : "bg-gray-200 text-gray-800 px-4 py-2 rounded";

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
