export default function Results(props) {
  return (
    <section
      style={{
        width: "80%",
        marginLeft: "150px",
        marginTop: "15px",
        padding: "15px",
        backgroundColor: "lightgray",
      }}
    >
      <pre>{props.data ? JSON.stringify(props.data, null, "\t") : null}</pre>
    </section>
  );
}
