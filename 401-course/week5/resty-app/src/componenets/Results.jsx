export default function Results(props) {
  return (
    <section>
      <pre>{props.data ? JSON.stringify(props.data, null, "\t") : null}</pre>
    </section>
  );
}
