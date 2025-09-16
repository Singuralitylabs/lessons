export default function TailwindButton({ children, disabled, onClick }) {
  return (
    <button
      className="px-4 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
