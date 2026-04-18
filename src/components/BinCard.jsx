export default function BinCard({ id, location, fill }) {

  let status = "OK";
  let color = "#16a34a";

  if (fill > 90) {
    status = "FULL";
    color = "#dc2626";
  } else if (fill > 70) {
    status = "NEARLY FULL";
    color = "#f59e0b";
  }

  return (
    <div style={{
      background: "white",
      padding: "15px",
      borderRadius: "12px",
      marginBottom: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>

      <h3 style={{ margin: 0 }}>Bin {id}</h3>
      <p style={{ margin: "5px 0", color: "#555" }}>{location}</p>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <span style={{
          color: color,
          fontWeight: "bold"
        }}>
          {status} ({fill}%)
        </span>

        <button style={{
          background: "#10b981",
          color: "white",
          border: "none",
          padding: "6px 10px",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Navigate
        </button>
      </div>

    </div>
  );
}