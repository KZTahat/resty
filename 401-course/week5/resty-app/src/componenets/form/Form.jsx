import { useState } from "react";
import "./form.scss";

const Form = (props) => {

  let handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      method: `${event.target.method.value}`,
      url: `${event.target.url.value}`,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <select id="method" name="method">
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
      </form>
    </>
  );
};

export default Form;
