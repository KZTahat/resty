function History(props) {
  return (
    <ul>
      {props.history.map((request, index) => (
        <>
          <li
            key={index}
            onClick={() => props.callApi(request)}
            style={{ cursor: "pointer" }}
          >
            {request.method} | {request.url}
          </li>
        </>
      ))}
    </ul>
  );
}

export default History;
