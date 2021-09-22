import { useReducer, useEffect } from "react";
import axios from "axios";
import "./app.scss";
import Header from "./componenets/Header";
import Form from "./componenets/form/Form";
import Results from "./componenets/Results";
import History from "./componenets/History";
import Footer from "./componenets/Footer";

const initialState = {
  data: {},
  history: [], // { method: 'GET', url: 'String', results: [] }
};

function reducer(state, action) {
  switch (action.type) {
    case "new-Data":
      return {
        data: action.payload.data,
        history: [...state.history, action.payload.requestParams],
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const callApi = (requestParams) => {
    axios
      .get(requestParams.url)
      .then((data) => {
        const action = {
          type: "new-Data",
          payload: { data, requestParams },
        };
        dispatch(action);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <Form handleApiCall={callApi} />
      <div
        style={{
          width: "25%",
          margin: "15px",
          position: "absolute",
          top: "150px",
          left: "30px",
        }}
      >
        <History history={state.history} callApi={callApi} />;
      </div>
      <div
        style={{
          width: "60%",
          marginLeft: "150px",
          marginTop: "15px",
          padding: "15px",
          backgroundColor: "lightgray",
          position: "absolute",
          top: "150px",
          right: "100px",
        }}
      >
        <Results data={state.data} />
      </div>
      <Footer />
    </>
  );
}

export default App;
