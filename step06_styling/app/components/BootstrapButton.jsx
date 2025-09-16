export default function BootstrapButton({ children, disabled, onClick }) {
  return (
    <button className="btn btn-primary" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
