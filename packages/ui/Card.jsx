export const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        margin: "8px",
        borderRadius: "6px",
      }}
    >
      {children}
    </div>
  );
};
