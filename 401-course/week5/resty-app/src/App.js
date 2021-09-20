import { useState } from "react";
import "./app.scss";
import Header from "./componenets/Header";
import Form from "./componenets/form/Form";
import Results from "./componenets/Results";
import Footer from "./componenets/Footer";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = (requestParams) => {
    const data = {
      count: 2,
      results: [
        { name: "fake thing 1", url: "http://fakethings.com/1" },
        { name: "fake thing 2", url: "http://fakethings.com/2" },
      ],
    };
    setData(data);
    setRequestParams(requestParams);
  };

  return (
    <>
      <Header />
      <div className='properities'>Request Method: {requestParams.method}</div>
      <div className='properities'>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
