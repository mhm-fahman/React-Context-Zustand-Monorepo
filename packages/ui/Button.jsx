export const Button = ({ children, onClick }) => {
  return (
    <button
      style={{
        padding: "8px 16px",
        margin: "6px",
        cursor: "pointer",
        background: "#4f8cff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        fontSize: "1rem",
        fontWeight: "500",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
