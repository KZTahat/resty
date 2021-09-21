import { useState, useEffect } from "react";
import axios from "axios";
import "./app.scss";
import Header from "./componenets/Header";
import Form from "./componenets/form/Form";
import Results from "./componenets/Results";
import Footer from "./componenets/Footer";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  useEffect(() => {
    console.log('inside the effect');
    callApi(requestParams);
  }, [requestParams])

  const callApi = (requestParams) => {
    axios
      .get(requestParams.url)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });

    setRequestParams(requestParams);
  };

  return (
    <>
      <Header />
      <div className="properities">Request Method: {requestParams.method}</div>
      <div className="properities">URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
