// モーダルコンポーネント（子要素を受け取る）

/**
 * このModalコンポーネントは、isOpenプロパティがtrueのときに表示され、onCloseプロパティの関数を呼び出すことで閉じることができます。
 */
function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <button onClick={onClose} className="float-right">
          ×
        </button>
        {children} {/* モーダルの中身 */}
      </div>
    </div>
  );
}

export default Modal;
