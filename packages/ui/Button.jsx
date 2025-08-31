export const Button = ({ children, onClick }) => {
  return (
    <button
      style={{ padding: "8px 16px", margin: "4px", cursor: "pointer" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
