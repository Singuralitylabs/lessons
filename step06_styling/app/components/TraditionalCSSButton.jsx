export default function TraditionalCSSButton({ children, disabled, onClick }) {
  return (
    <button className="traditional-button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
